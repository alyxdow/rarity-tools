import { defineComponent, useFetch, ref, computed, watch } from '@nuxtjs/composition-api'
import fetch from 'cross-fetch'
import { filter, sortBy } from 'lodash'
import { collections } from '~/api/config'
import { Collection } from '~/types'

export default defineComponent({
  props: ['data', 'view', 'pages', 'firstPage', 'limit', 'sort'],

  setup(props) {
    const nfts = ref()
    const actualPage = ref()

    // Get NFT ---------------------------------------------------------------------------------------------------------------|
    // prettier-ignore
    const getNFT = async (from?: number, to?: number) => {
      const dataUrl = computed(() => filter(props.data, { value: actualPage.value.value })[0])

      const res  = await fetch(dataUrl.value.url)
      const body = await res.json()

      const rawNFT = body.collection.map((ape: any) => ({
        ...ape,
        collection: filter(collections, { value: dataUrl.value.value })[0],
      }))

      let nftsData              = rawNFT
      if (props.sort ) nftsData = sortBy(nftsData, props.sort)
      if (props.limit) nftsData = nftsData.slice(from, to)

      return nftsData
    }
    watch(actualPage, () => getNFT(0, props.limit))

    // Get more NFT ----------------------------------------------------------------------------------------------------------|
    const getMoreNFT = async () => {
      if (nfts.value.length >= 9999) return

      const newNFT = await getNFT(nfts.value.length, nfts.value.length + props.limit)
      nfts.value = [...nfts.value, ...newNFT]
    }

    // Toggle actual collection ----------------------------------------------------------------------------------------------|
    const togglePage = (collection: Collection) => (actualPage.value = collection)

    // Fetch data on instance mounted ----------------------------------------------------------------------------------------|
    useFetch(async () => {
      actualPage.value = props.firstPage ? props.firstPage : props.pages[0]
      nfts.value = await getNFT(0, props.limit)
    })

    // Return values ---------------------------------------------------------------------------------------------------------|
    return {
      nfts,
      togglePage,
      actualPage,
      getMoreNFT,
    }
  },
})
