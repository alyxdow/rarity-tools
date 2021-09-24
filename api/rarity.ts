import { filter, sum, values } from 'lodash'
import { getTraits, sumTraits } from '~/api/traits'
import { AllTraits, Ape, Collection, Rule } from '~/types'
import { getNumberOfApes } from './apes'
import { rules } from './config'

/**
 * Method to verify a rarity of a trait on a collection
 * @param collectionName collection name to find
 * @param traitName trait name to filter
 * @param traitValue trait value to find
 * @returns rarity of some trait on a collection
 */

export const calculateRarity = async <TraitName extends keyof AllTraits>(
  collectionName: Collection,
  traitName: TraitName,
  traitValue: string,
  rule?: Rule
) => {
  const traits = await getTraits(collectionName)
  const numberOfApes = await getNumberOfApes(collectionName)
  if (!traits || !numberOfApes) return

  if (!traits[traitName]) return
  const allTraitsCount = sumTraits(traits[traitName])

  const timesRepeated = allTraitsCount[traitValue]
  if (!timesRepeated) return

  let rawRarity = +(numberOfApes / timesRepeated)
  let rarity = +rawRarity.toFixed(2)

  if (rule) {
    if (traitName !== 'Type') rarity = 1
    else rarity = rarity * rule.rule
  }

  return +rarity.toFixed(2)
}

/**
 * Method to calculate the rarity of all traits on a ape
 * @param ape ape to be evaluated
 * @returns an object with all traits rarity
 */

export const calculateApeRarity = async (ape: Ape) => {
  const apeTraits: any = ape.traits
  const apeCollection = ape.collection
  const apeTraitsRarities: any = {}
  const apeRule: Rule = filter(rules, { Type: ape.traits.Type })[0]

  for (const key in apeTraits) {
    const trait = apeTraits[key]
    const traitRarity = await calculateRarity(apeCollection, key, trait, apeRule)

    if (traitRarity) {
      apeTraitsRarities[key] = traitRarity
    }
  }

  return apeTraitsRarities
}

/**
 * Method to calculate how much a ape worths
 * @param ape ape to be evaluated
 * @returns the score points as a number
 */

export const calculateApeScorePoint = async (ape: Ape) => {
  const traitsValue = values(await calculateApeRarity(ape))
  const scorePoints = +sum(traitsValue).toFixed(2)

  return scorePoints
}
