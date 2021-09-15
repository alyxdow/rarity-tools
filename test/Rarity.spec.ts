import { describe, test, expect } from '@jest/globals'
import { calculateApeRarity, calculateRarity } from '~/api/rarity'
import { Ape } from '~/types'

describe('Trait rarity', () => {
  test('Bored blue background', async () => {
    const rarity = await calculateRarity('bored', 'Background', 'Blue')
    expect(rarity).toBe(8.08)
  })

  test('Bored bloodshot eyes', async () => {
    const rarity = await calculateRarity('bored', 'Eyes', 'Bloodshot')
    expect(rarity).toBe(11.9)
  })

  test('Mutant M1 sad eyes', async () => {
    const rarity = await calculateRarity('mutants', 'Eyes', 'M1 Sad')
    expect(rarity).toBe(25.19)
  })

  test('Mutant M2 bored mouth', async () => {
    const rarity = await calculateRarity('mutants', 'Mouth', 'M2 Bored')
    expect(rarity).toBe(19.62)
  })
})

describe('Ape rarity', () => {
  test('Simple bored ape', async () => {
    const ape: Ape = {
      image: '',
      imageHash: '',
      tokenId: 0,
      collection: 'bored',
      traits: {
        Background: 'Blue',
        Clothes: 'Striped Tee',
        Eyes: 'Blindfold',
        Mouth: 'Bored',
        Fur: 'Brown',
      },
    }

    const rarity = await calculateApeRarity(ape)
    expect(rarity).toStrictEqual({
      Background: 8.08,
      Clothes: 24.39,
      Eyes: 37.88,
      Mouth: 4.42,
      Fur: 7.31,
    })
  })

  test('Simple mutant ape', async () => {
    const ape: Ape = {
      image: '',
      imageHash: '',
      tokenId: 0,
      collection: 'mutants',
      traits: {
        Background: 'M2 Blue',
        Clothes: 'M1 Striped Tee',
        Eyes: 'M1 Blindfold',
        Mouth: 'M2 Bored',
        Fur: 'M1 Brown',
      },
    }

    const rarity = await calculateApeRarity(ape)

    expect(rarity).toStrictEqual({
      Background: 33.59,
      Clothes: 34.5,
      Eyes: 53.57,
      Mouth: 19.62,
      Fur: 9.89,
    })
  })

  test('Broken trait value', async () => {
    /**
     * Test passing a wrong trait value
     * Expect the code to remove this value and count the other ones
     */
    const ape: Ape = {
      image: '',
      imageHash: '',
      tokenId: 0,
      collection: 'bored',
      traits: {
        Background: 'Blue',
        Clothes: 'wrong value here',
        Eyes: 'Blindfold',
        Mouth: 'Bored',
        Fur: 'Brown',
      },
    }

    const rarity = await calculateApeRarity(ape)
    expect(rarity).toStrictEqual({
      Background: 8.08,
      Eyes: 37.88,
      Fur: 7.31,
      Mouth: 4.42,
    })
  })

  test('Broken trait name', async () => {
    const ape: any = {
      image: '',
      imageHash: '',
      tokenId: 0,
      collection: 'mutants',
      traits: {
        WrongName: 'random value',
        Background: 'M2 Purple',
        Eyes: 'M1 Blindfold',
        Mouth: 'M2 Bored',
        Fur: 'M1 Robot',
      },
    }

    const rarity = await calculateApeRarity(ape)
    expect(rarity).toStrictEqual({
      Background: 33.15,
      Eyes: 53.57,
      Mouth: 19.62,
      Fur: 47.2,
    })
  })
})
