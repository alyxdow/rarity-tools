import { defineComponent, ref, onMounted, useContext, computed } from '@nuxtjs/composition-api'
import { useFavicon, usePreferredDark, get } from '@vueuse/core'
import { collections, url } from '~/api/config'
import useSetFavicon from '~/vue/useSetFavicon'

export default defineComponent({
  setup() {
    // Nuxt variables / methods ----------------------------------------------------------------------------------------------|
    const { route } = useContext()

    // Apes ------------------------------------------------------------------------------------------------------------------|
    const nfts = ref()
    const getFirstApes = async () => {
      nfts.value = collections.map(collection => ({
        value: collection.value,
        url: `${url}/collections/${collection.value}.json`,
      }))
    }

    // Favicon ---------------------------------------------------------------------------------------------------------------|
    useSetFavicon()

    // Gallery views
    const view = ref('gallery')

    // On instance mounted ---------------------------------------------------------------------------------------------------|
    onMounted(() => {
      getFirstApes()
    })

    // Return values ---------------------------------------------------------------------------------------------------------|
    return {
      nfts,
      view,
      collections,
    }
  },
})
