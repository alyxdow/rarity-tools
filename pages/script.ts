import { defineComponent, ref, useFetch, Ref } from '@nuxtjs/composition-api'
import { calculateApeRarity, calculateRarity } from '~/api/rarity'
import { AllTraits } from '~/types'

export default defineComponent({
  setup() {
    const val = ref()
    const loading = ref(true)
    const error = ref(false)

    const collection = ref('bored')
    const traitName: Ref<keyof AllTraits> = ref('Mouth')
    const traitValue = ref('Bored')

    useFetch(async () => {
      const ape = {
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
      val.value = await calculateApeRarity(ape)

      if (val.value) loading.value = false
      else error.value = true
    })

    return { val, loading, error, collection, traitName, traitValue }
  },
})
