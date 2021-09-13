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
  const apes: Ape[] = body.collection

  return apes
}
