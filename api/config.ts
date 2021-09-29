/**
 * |--------------------------------------------------------------------------------------------------------------------------|
 * | Development Server                                                                                                       |
 * |--------------------------------------------------------------------------------------------------------------------------|
 */

export const dev = process.env.NODE_ENV !== 'production'
export const url = dev ? 'http://localhost:3000' : 'https://apexgo.vercel.app'

/**
 * |--------------------------------------------------------------------------------------------------------------------------|
 * | Collections                                                                                                              |
 * |--------------------------------------------------------------------------------------------------------------------------|
 */

export const collections = [
  {
    name: 'Bored Ape Tron Club',
    value: 'bored',
  },

  {
    name: 'Mutant Ape Tron Club',
    value: 'mutants',
  },
]

/**
 * |--------------------------------------------------------------------------------------------------------------------------|
 * | Special Rules                                                                                                            |
 * |--------------------------------------------------------------------------------------------------------------------------|
 */

// prettier-ignore
export const rules = [
  { Type: 'Justin Sun'  , rule: 8  },
  { Type: 'Tron Bull'   , rule: 8  },
  { Type: 'Tron Friend' , rule: 8  },
  { Type: 'Tron Legend' , rule: 10 },

  { Type: 'Justin Sun Mutant'  , rule: 8  },
  { Type: 'Tron Bull Mutant'   , rule: 8  },
  { Type: 'Tron Friend Mutant' , rule: 8  },
  { Type: 'Mega'               , rule: 10 },
]
