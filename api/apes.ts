import fetch from 'cross-fetch'
import { filter, map, values } from 'lodash'
import { Ape, Collection } from '~/types'
import { url, collections } from './config'

/**
 * Method to get all the apes from a ape collection
 * @param collection collection name to find
 * @returns an array with the apes
 */

export const getApes = async (collection: Collection) => {
  const allCollections = values(map(collections, 'value'))
  if (!allCollections.includes(collection.value)) return

  const res = await fetch(`${url}/apes/${collection.value}.json`)
  const body = await res.json()
  const rawApes: Ape[] = body.collection

  const apes = rawApes.map(ape => ({
    ...ape,
    collection,
  }))

  return apes
}

/**
 * Method to find a ape by its ID and collection
 * @param collection collection name to find
 * @param apeId tokenId to search
 * @returns the ape that corresponds to id
 */

export const getApe = async (collection: Collection, apeId: string | number) => {
  const allApes = await getApes(collection)
  if (!allApes) return

  const ape = filter(allApes, { tokenId: apeId })[0]
  if (!ape) return console.log(`Error, cannot find ${apeId}`)

  return ape
}

/**
 * Method to get the number of apes on a specified collection
 * @param collection collection name to measure
 * @returns a number that represents the number of apes
 */

export const getNumberOfApes = async (collection: Collection) => {
  const apes = await getApes(collection)
  if (!apes) return

  return apes.length
}
