import { sum, values } from 'lodash'
import { getTraits, sumTraits } from '~/api/traits'
import { AllTraits, Ape, Collection } from '~/types'
import { getNumberOfApes } from './apes'

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
  traitValue: string
) => {
  const traits = await getTraits(collectionName)
  const numberOfApes = await getNumberOfApes(collectionName)
  if (!traits || !numberOfApes) return

  if (!traits[traitName]) return
  const allTraitsCount = sumTraits(traits[traitName])

  const timesRepeated = allTraitsCount[traitValue]
  if (!timesRepeated) return

  const rawRarity = +(numberOfApes / timesRepeated)
  const rarity = rawRarity >= 100 ? 100 : rawRarity.toFixed(2)

  return +rarity
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

  for (const key in apeTraits) {
    const trait = apeTraits[key]
    const traitRarity = await calculateRarity(apeCollection, key, trait)

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
