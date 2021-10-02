import { defineComponent, useFetch, ref, computed, watch, PropType } from '@nuxtjs/composition-api'
import fetch from 'cross-fetch'
import { filter, sortBy } from 'lodash'
import { collections } from '~/api/config'
import { Collection } from '~/types'

interface Page {
  name: string
  value: string
}

interface NFT {
  value: string
  url: string
}

export default defineComponent({
  // prettier-ignore
  props: {
    data: {
      type     : Object as PropType<NFT[]>,
      required : true,
    },

    pages: {
      type     : Array as PropType<Page[]>,
      required : true,
    },

    firstPage : Object as PropType<Page>,
    sort      : String,
    limit     : Number,
  },

  setup(props) {
    const nfts = ref()
    const actualPage = ref()

    // Get NFT ---------------------------------------------------------------------------------------------------------------|
    // prettier-ignore
    const getNFT = async (from?: number, to?: number) => {
      const dataUrl = computed(() => filter(props.data, {
        value: actualPage.value.value
      })[0])

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
    watch(actualPage, async () => (nfts.value = await getNFT(0, props.limit)))

    // Get more NFT ----------------------------------------------------------------------------------------------------------|
    const getMoreNFT = async () => {
      // TODO: Use the collection length as a limit
      if (nfts.value.length >= 9999) return

      const newNFT = await getNFT(nfts.value.length, nfts.value.length + props.limit)
      nfts.value = [...nfts.value, ...newNFT]
    }

    // Fetch data on instance mounted ----------------------------------------------------------------------------------------|
    useFetch(async () => {
      actualPage.value = props.firstPage ? props.firstPage : props.pages[0]
      nfts.value = await getNFT(0, props.limit)
    })

    // Views -----------------------------------------------------------------------------------------------------------------|
    const views = ['gallery', 'thumbnail', 'list']
    const activeView = ref('gallery')

    // Choose views side -----------------------------------------------------------------------------------------------------|
    const side = (view: string) => {
      const index = views.indexOf(view)
      return index == 0 ? 'left' : index == views.length - 1 ? 'right' : 'center'
    }

    // Return values ---------------------------------------------------------------------------------------------------------|
    return {
      nfts,
      actualPage,
      getMoreNFT,
      views,
      activeView,
      side,
    }
  },
})
