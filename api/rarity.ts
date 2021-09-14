import { getTraits, sumTraits } from '~/api/traits'
import { AllTraits } from '~/types'
import { getNumberOfApes } from './apes'

/**
 * Method to verify a rarity of a trait on a collection
 * @param collectionName collection name to find
 * @param traitName trait name to filter
 * @param traitValue trait value to find
 * @returns rarity of some trait on a collection
 */

export const calculateRarity = async <TraitName extends keyof AllTraits>(
  collectionName: string,
  traitName: TraitName,
  traitValue: string
) => {
  const traits = await getTraits(collectionName)
  const numberOfApes = await getNumberOfApes(collectionName)
  if (!traits || !numberOfApes) return

  const allTraitsCount = sumTraits(traits[traitName])
  const timesRepeated = allTraitsCount[traitValue]

  const rawRarity = +(numberOfApes / timesRepeated)
  const rarity = rawRarity >= 100 ? 100 : rawRarity.toFixed(2)

  return rarity
}
