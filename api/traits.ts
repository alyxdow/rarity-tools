import { AllTraits, Collection } from '~/types'
import { getApes } from './apes'

/**
 * Method to get all the traits from a ape collection
 * @param collection collection name to find
 * @returns an array with the traits
 */

export const getTraits = async (collection: Collection) => {
  const apes = await getApes(collection)
  if (!apes) return false

  const traits: any[] = apes.map(ape => ape.traits)

  // prettier-ignore
  const allTraits: AllTraits = {
    Fur:        [],
    Hat:        [],
    Eyes:       [],
    Name:       [],
    Type:       [],
    Mouth:      [],
    Clothes:    [],
    Earring:    [],
    Background: [],
  }

  // prettier-ignore
  traits.forEach(trait => {
    // TODO: reduce this to one line of code
    allTraits['Fur'       ].push(trait['Fur'       ])
    allTraits['Hat'       ].push(trait['Hat'       ])
    allTraits['Eyes'      ].push(trait['Eyes'      ])
    allTraits['Name'      ].push(trait['Name'      ])
    allTraits['Type'      ].push(trait['Type'      ])
    allTraits['Mouth'     ].push(trait['Mouth'     ])
    allTraits['Clothes'   ].push(trait['Clothes'   ])
    allTraits['Earring'   ].push(trait['Earring'   ])
    allTraits['Background'].push(trait['Background'])
  })

  return allTraits
}

/**
 * Method to count how many times a trait repeat on a collection
 * @param traitsArr array with all traits to verify
 * @returns an object with the count
 */

export const sumTraits = (traitsArr: string[]) => {
  return traitsArr.reduce((acc: any, cur: any) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})
}

/**
 * Method to count how much a trait value has repeated on a collection
 * @param collection collection name to find
 * @param traitName name of trait to count
 * @param traitValue value of trait to count
 * @returns the repetition number
 */
export const getTraitNumberOfRepetitions = async <TraitName extends keyof AllTraits>(
  collection: Collection,
  traitName: TraitName,
  traitValue: string
) => {
  // TODO: evaluate type of ape
  const allTraits = await getTraits(collection)
  if (!allTraits) return

  const count = sumTraits(allTraits[traitName])[traitValue]

  return count
}
