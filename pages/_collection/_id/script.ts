import { defineComponent, ref, Ref, useContext, computed, watch, onMounted, useStore, useRoute } from '@nuxtjs/composition-api'
import { filter, pickBy } from 'lodash'
import { collections, url } from '~/api/config'
import { Mutations } from '~/store/types'
import useModal from '~/vue/useModal'
import useSetFavicon from '~/vue/useSetFavicon'

export default defineComponent({
  transition: {
    name: 'ape',
    mode: 'out-in',
  },

  setup() {
    // Nuxt variables / methods ----------------------------------------------------------------------------------------------|
    const store: any = useStore()
    const route = useRoute()
    const { redirect } = useContext()

    // On instance mounted ---------------------------------------------------------------------------------------------------|
    onMounted(() => {
      const apeId = route.value.params.id
      const collection = filter(collections, { value: route.value.params.collection })[0]

      store.dispatch('evaluateApe', { apeId, collection })
    })

    // Ape info from Vuex ----------------------------------------------------------------------------------------------------|
    const ape = computed(() => store.state.ape)
    const apeScore = computed(() => store.state.apeScore)
    const collectionsValues: any = {
      bored: 'default',
      mutants: 'mutant',
    }
    const collection = computed(() => {
      if (ape.value) {
        return collectionsValues[store.state.ape.collection.value]
      }
    })

    // Error -----------------------------------------------------------------------------------------------------------------|
    const error = computed(() => store.state.error)

    // Ape traits ------------------------------------------------------------------------------------------------------------|
    const traits: Ref<any[]> = ref([])
    watch(ape, () => {
      if (ape.value) {
        for (const key in ape.value.traits) {
          const trait = ape.value.traits[key]
          traits.value.push({ [key]: trait })
        }
      }
    })

    // When the user close the page ------------------------------------------------------------------------------------------|
    const clearApe = () => {
      redirect('/')

      setTimeout(() => {
        store.commit(Mutations.CLEAR_APE_INFO)
        traits.value = []
      }, 3000)
    }

    // Share menu ------------------------------------------------------------------------------------------------------------|
    const menu = ref()
    const { showModal, toggleModal } = useModal(menu)
    const linkCopied = ref(false)
    const copyUrl = () => (linkCopied.value = true)

    // Nones filter ----------------------------------------------------------------------------------------------------------|
    const showNones = ref(true)
    const traitsToShow = computed(() => {
      if (showNones.value) return traits.value

      return pickBy(traits.value, trait => {
        for (let key in trait) {
          if (trait[key]) return trait[key]
        }
      })
    })

    // Favicon ---------------------------------------------------------------------------------------------------------------|
    useSetFavicon()

    // Return values ---------------------------------------------------------------------------------------------------------|
    return {
      ape,
      error,
      traits,
      apeScore,
      clearApe,
      collection,
      menu,
      showModal,
      toggleModal,
      copyUrl,
      url,
      linkCopied,
      showNones,
      traitsToShow,
    }
  },
})
