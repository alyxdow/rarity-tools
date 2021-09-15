import { defineComponent, ref, useFetch, Ref, reactive } from '@nuxtjs/composition-api'
import { calculateApeRarity, calculateApeScorePoint } from '~/api/rarity'
import { AllTraits } from '~/types'

export default defineComponent({
  setup() {
    const val = ref()
    const loading = ref(true)
    const error = ref(false)

    const collection = ref('bored')
    const traitName: Ref<keyof AllTraits> = ref('Mouth')
    const traitValue = ref('Bored')
    const ape = reactive({
      image: '',
      imageHash: '',
      tokenId: 0,
      collection: 'bored',
      traits: {
        Background: 'Yellow',
        Clothes: 'Striped Tee',
        Eyes: 'Blindfold',
        Mouth: 'Closed',
        Fur: 'Red',
        Hat: 'Yellow Horns',
        Earring: 'Cross',
      },
    })
    const apeScore = ref(0)

    useFetch(async () => {
      val.value = await calculateApeRarity(ape)
      apeScore.value = await calculateApeScorePoint(ape)

      if (val.value) loading.value = false
      else error.value = true
    })

    return { val, ape, loading, error, collection, traitName, traitValue, apeScore }
  },
})
