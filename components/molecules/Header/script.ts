import { defineComponent, ref, useContext, useStore, computed } from '@nuxtjs/composition-api'
import { useMediaQuery } from '@vueuse/core'
import { filter } from 'lodash'
import { collections as allCollections, rules } from '~/api/config'
import { Mutations } from '~/store/types'
import useModal from '~/vue/useModal'
import { useScroll } from '~/vue/useScroll'

export default defineComponent({
  props: {
    mobileForm: {
      type: Boolean,
      default: true,
    },

    tabletForm: {
      type: Boolean,
      default: true,
    },

    desktopForm: {
      type: Boolean,
      default: true,
    },
  },

  setup() {
    const { getters, commit } = useStore()
    const { redirect } = useContext()

    const apeId = ref()
    const collection = ref('Bored Ape Tron Club')
    const collections = ref(getters.collectionsNames)
    const selectedCollection = computed(() => filter(allCollections, { name: collection.value })[0])

    const evaluateApe = () => {
      commit(Mutations.CLEAR_APE_INFO)
      redirect(`/collections/${selectedCollection.value.value}/${apeId.value}`)
    }

    const goHome = () => {
      commit(Mutations.CLEAR_APE_INFO)
      redirect('/')
    }

    const { hasScrolled: desktopScroll } = useScroll(80)

    const navContainer = ref()
    const { showModal, toggleModal } = useModal(navContainer, true)
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
      navContainer,
      toggleModal,
    }
  },
})
