import { ref, Ref, onMounted } from '@nuxtjs/composition-api'
import { onClickOutside } from '@vueuse/core'

const useModal = (el: Ref<HTMLElement>, verifyOutside: boolean) => {
  const showModal = ref(false)
  const toggleModal = () => {
    showModal.value = !showModal.value
  }

  if (verifyOutside) {
    onMounted(() => {
      onClickOutside(el.value, () => (showModal.value = false))
    })
  }

  return {
    showModal,
    toggleModal,
  }
}

export default useModal
