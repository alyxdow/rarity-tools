import { defineComponent, ref, onMounted, useContext, computed } from '@nuxtjs/composition-api'
import { useFavicon, usePreferredDark, get } from '@vueuse/core'
import { filter, sortBy } from 'lodash'
import { getApes } from '~/api/apes'
import { collections, url } from '~/api/config'
import { Collection } from '~/types'
import useSetFavicon from '~/vue/useSetFavicon'

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

    // Collection ------------------------------------------------------------------------------------------------------------|
    const toggleCollection = (collection: Collection) => {
      if (process.client) {
        localStorage.setItem('collection', collection.value)
      }
    }

    // Favicon ---------------------------------------------------------------------------------------------------------------|
    useSetFavicon()

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
      toggleCollection,
    }
  },
})
