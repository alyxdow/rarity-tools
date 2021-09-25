import { defineComponent, ref, onMounted, useContext, computed } from '@nuxtjs/composition-api'
import { filter, sortBy } from 'lodash'
import { getApes } from '~/api/apes'
import { collections } from '~/api/config'

export default defineComponent({
  setup() {
    // Nuxt variables / methods ----------------------------------------------------------------------------------------------|
    const { store, route } = useContext()

    // Apes ------------------------------------------------------------------------------------------------------------------|
    const apes = ref()
    const collectionValue = computed(() => filter(collections, { value: route.value.params.collection })[0])
    const getFirstApes = async () => {
      // Show them sorted by ID
      apes.value = sortBy(await getApes(collectionValue.value), 'tokenId')?.slice(0, 3)

      // Show them in random position
      // apes.value = await getRandomApes(collectionValue.value, 3)
    }

    // Get more apes ---------------------------------------------------------------------------------------------------------|
    const getMoreApes = async (numberOfApes: number, limit: number) => {
      if (apes.value.length >= limit) return

      // const newApes = await getRandomApes(collectionValue.value, numberOfApes)
      const newApes = await sortBy(await getApes(collectionValue.value), 'tokenId')?.slice(
        apes.value.length,
        apes.value.length + numberOfApes
      )
      apes.value = [...apes.value, ...newApes]
    }

    // On instance mounted ---------------------------------------------------------------------------------------------------|
    onMounted(() => {
      getFirstApes()
    })

    // Return values ---------------------------------------------------------------------------------------------------------|
    return {
      apes,
      collectionValue,
      collections,
      getFirstApes,
      getMoreApes,
    }
  },
})
