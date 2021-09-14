import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import { getNumberOfApes } from '~/api/apes'

export default defineComponent({
  setup() {
    const val = ref()
    const collection = ref('mutants')

    useFetch(async () => {
      val.value = await getNumberOfApes(collection.value)
      console.log(val.value)
    })

    return { val, collection }
  },
})
