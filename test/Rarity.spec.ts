import { describe, test, expect } from '@jest/globals'
import { calculateApeRarity, calculateApeScorePoint, calculateRarity } from '~/api/rarity'
import { Ape } from '~/types'

const ape: Ape = {
  image: '',
  imageHash: '',
  tokenId: 0,
  collection: { value: '' },
  traits: {
    Background: '',
    Clothes: '',
    Eyes: '',
    Mouth: '',
    Fur: '',
    Hat: '',
    Earring: '',
  },
}

/*
describe('Trait rarity', () => {
  test('Bored blue background', async () => {
    const rarity = await calculateRarity({ value: 'bored' }, 'Background', 'Blue')
    expect(rarity).toBe(8.08)
  })

  test('Bored bloodshot eyes', async () => {
    const rarity = await calculateRarity({ value: 'bored' }, 'Eyes', 'Bloodshot')
    expect(rarity).toBe(11.9)
  })

  test('Mutant M1 sad eyes', async () => {
    const rarity = await calculateRarity({ value: 'mutants' }, 'Eyes', 'M1 Sad')
    expect(rarity).toBe(25.19)
  })

  test('Mutant M2 bored mouth', async () => {
    const rarity = await calculateRarity({ value: 'mutants' }, 'Mouth', 'M2 Bored')
    expect(rarity).toBe(19.62)
  })
})
*/

describe('Ape rarity', () => {
  test('Simple bored ape', async () => {
    ape.collection.value = 'bored'
    ape.traits = {
      Background: 'Blue',
      Clothes: 'Striped Tee',
      Eyes: 'Blindfold',
      Mouth: 'Bored',
      Fur: 'Brown',
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
    ape.collection.value = 'mutant'
    ape.traits = {
      Background: 'M2 Blue',
      Clothes: 'M1 Striped Tee',
      Eyes: 'M1 Blindfold',
      Mouth: 'M2 Bored',
      Fur: 'M1 Brown',
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

    ape.collection.value = 'bored'
    ape.traits = {
      Background: 'Blue',
      Clothes: 'wrong value here',
      Eyes: 'Blindfold',
      Mouth: 'Bored',
      Fur: 'Brown',
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
      collection: { value: 'mutants' },
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

describe('Ape points', () => {
  test('Random full bored score', async () => {
    ape.collection.value = 'mutants'
    ape.traits = {
      Background: 'Yellow',
      Clothes: 'Striped Tee',
      Eyes: 'Blindfold',
      Mouth: 'Closed',
      Fur: 'Red',
      Hat: "Fisherman's Hat",
      Earring: 'Diamond Stud',
    }

    const points = await calculateApeScorePoint(ape)
    expect(points).toBe(265.62)
  })

  test('Random bored score', async () => {
    ape.collection.value = 'mutants'
    ape.traits = {
      Background: 'Yellow',
      Clothes: 'Striped Tee',
      Eyes: 'Blindfold',
      Mouth: 'Closed',
      Fur: 'Red',
      Earring: 'Diamond Stud',
    }

    const points = await calculateApeScorePoint(ape)
    expect(points).toBe(236.55)
  })

  test('Cheapest full bored ape', async () => {
    ape.collection.value = 'mutants'
    ape.traits = {
      Background: 'Yellow',
      Clothes: 'Striped Tee',
      Eyes: 'Bored',
      Mouth: 'Bored Unshaven',
      Fur: 'Dark Brown',
      Hat: "Seaman's Hat",
      Earring: 'Silver Hoop',
    }

    const rarity = await calculateApeScorePoint(ape)
    expect(rarity).toBe(87.27)
  })

  test('Expensive full bored ape', async () => {
    ape.collection.value = 'mutants'
    ape.traits = {
      Background: 'Dark Blue',
      Clothes: 'Dark Suit',
      Eyes: 'Wide Blue',
      Mouth: 'Biting',
      Fur: 'Green Camouflage',
      Hat: 'Yellow Horns',
      Earring: 'Cross',
    }

    const rarity = await calculateApeScorePoint(ape)
    expect(rarity).toBe(668.03)
  })

  test('Random full mutant score', async () => {
    ape.collection = {
      value: 'mutants',
    }
    ape.traits = {
      Background: 'M1 New Punk Blue',
      Clothes: 'M1 Prison Jumpsuit',
      Eyes: 'M2 Heart',
      Mouth: 'M1 Bored Unshaven Dagger',
      Fur: 'M2 Cheetah',
      Hat: 'M2 Bayc Flipped Brim',
      Earring: 'M1 Diamond Stud',
    }

    const rarity = await calculateApeScorePoint(ape)
    expect(rarity).toBe(529.7)
  })

  test('Cheapest full mutant score', async () => {
    ape.collection.value = 'mutants'

    ape.traits = {
      Background: 'M1 Aquamarine',
      Clothes: 'M1 Navy Striped Tee',
      Eyes: 'M1 Bored',
      Mouth: 'M1 Bored',
      Fur: 'M1 Dark Brown',
      Hat: 'M1 Beanie',
      Earring: 'M1 Silver Hoop',
    }

    const rarity = await calculateApeScorePoint(ape)
    expect(rarity).toBe(113.22)
  })

  test('Expensive full mutant score', async () => {
    ape.collection.value = 'mutants'
    ape.traits = {
      Background: 'M2 Blue',
      Clothes: 'M2 Blue Dress',
      Eyes: 'M2 Cyborg',
      Mouth: 'M2 Bored Unshaven Dagger',
      Fur: 'M2 Solid Gold',
      Hat: "M2 Trippy Captain's Hat",
      Earring: 'M2 Cross',
    }

    const rarity = await calculateApeScorePoint(ape)
    expect(rarity).toBe(633.59)
  })

  test('Random mutant score', async () => {
    ape.collection.value = 'mutants'
    ape.traits = {
      Background: 'M1 New Punk Blue',
      Eyes: 'M2 Heart',
      Mouth: 'M1 Bored Unshaven Dagger',
      Fur: 'M2 Cheetah',
      Earring: 'M1 Diamond Stud',
    }

    const rarity = await calculateApeScorePoint(ape)
    expect(rarity).toBe(372.51)
  })
})
