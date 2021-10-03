import { defineComponent, onMounted, useContext, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { route, redirect } = useContext()

    // prettier-ignore
    const username = computed(() => {
      const name        = route.value.params.username
      const firstLetter = name.charAt(0)
      const rest        = name.slice(1)

      return `${firstLetter.toUpperCase()}${rest}`
    })

    onMounted(() => {
      if (route.value.params.username !== process.env.devUsername) {
        redirect('/')
      }
    })

    return {
      username,
    }
  },
})
