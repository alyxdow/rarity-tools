import fetch from 'cross-fetch'
import { Ape } from '~/types'
import { url, collections } from './config'

/**
 * Method to get all the apes from a ape collection
 * @param collection collection name to find
 * @returns an array with the apes
 */

export const getApes = async (collection: string) => {
  if (!collections.includes(collection)) return false

  const res = await fetch(`${url}/apes/${collection}.json`)
  const body = await res.json()
  const rawApes: Ape[] = body.collection

  const apes = rawApes.map(ape => ({
    ...ape,
    collection,
  }))

  return apes
}

/**
 * Method to get the number of apes on a specified collection
 * @param collection collection name to measure
 * @returns a number that represents the number of apes
 */

export const getNumberOfApes = async (collection: string) => {
  const apes = await getApes(collection)
  if (!apes) return

  return apes.length
}
