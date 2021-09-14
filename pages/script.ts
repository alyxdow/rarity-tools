import { defineComponent, ref, useFetch, Ref } from '@nuxtjs/composition-api'
import { calculateRarity } from '~/api/rarity'
import { AllTraits } from '~/types'

export default defineComponent({
  setup() {
    const val = ref()
    const collection = ref('bored')
    const traitName: Ref<keyof AllTraits> = ref('Background')
    const traitValue = ref('Blue')

    useFetch(async () => {
      val.value = await calculateRarity(collection.value, traitName.value, traitValue.value)
    })

    return { val, collection, traitName, traitValue }
  },
})
