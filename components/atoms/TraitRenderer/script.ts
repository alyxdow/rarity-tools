import { defineComponent, useContext, computed, useFetch, ref } from '@nuxtjs/composition-api'
import { keys } from 'lodash'
import { getTraitNumberOfRepetitions } from '~/api/traits'

export default defineComponent({
  props: {
    trait: Object,
  },

  setup(props) {
    const traitName = keys(props.trait)[0]
    const traitValue = props.trait![traitName]

    const { store } = useContext()
    const rarity = computed(() => store.state.apeRarity[traitName])
    const count = ref()

    useFetch(async () => {
      count.value = await getTraitNumberOfRepetitions(store.state.ape.collection, traitName, traitValue)

      console.log({ [traitValue]: count.value })
    })

    return { traitName, traitValue, rarity, count }
  },
})
