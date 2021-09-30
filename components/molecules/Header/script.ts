import { defineComponent, ref, useContext, useStore, computed } from '@nuxtjs/composition-api'
import { useMediaQuery } from '@vueuse/core'
import { filter } from 'lodash'
import { collections as allCollections } from '~/api/config'
import { Mutations } from '~/store/types'
import useModal from '~/vue/useModal'
import { useScroll } from '~/vue/useScroll'

export default defineComponent({
  setup() {
    const { getters, commit } = useStore()
    const { redirect } = useContext()

    const apeId = ref()
    const collection = ref('Bored Ape Tron Club')
    const collections = ref(getters.collectionsNames)
    const selectedCollection = computed(() => filter(allCollections, { name: collection.value })[0])

    const evaluateApe = () => {
      commit(Mutations.CLEAR_APE_INFO)
      redirect(`/${selectedCollection.value.value}/${apeId.value}`)
    }

    const goHome = () => {
      commit(Mutations.CLEAR_APE_INFO)
      redirect('/')
    }

    const { hasScrolled: desktopScroll } = useScroll(80)

    const navList = ref()
    const { showModal, toggleModal } = useModal(navList, false)
    const isMediumScreen = useMediaQuery('(min-width: 768px)')

    return {
      collections,
      collection,
      evaluateApe,
      apeId,
      goHome,
      desktopScroll,
      showModal,
      isMediumScreen,
      navList,
      toggleModal,
    }
  },
})
