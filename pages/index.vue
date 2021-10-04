<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import { collections, url } from '~/api/config'
import useSetFavicon from '~/vue/useSetFavicon'

export default defineComponent({
  setup() {
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
</script>

<template>
  <div class="main">
    <Gallery 
      v-if="nfts" 
      :data="nfts" 
      :view="view" 
      :pages="collections"
      :limit="6"
      sort="tokenId"
    />
  </div>
</template>

<style lang="scss">
.ape-enter-from,
.ape-leave-to {
  opacity: 0
}

.ape-enter-active,
.ape-leave-active {
  transition: all 0.3s ease
}
</style>
