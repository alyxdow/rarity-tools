import { defineComponent, onMounted, useContext, computed } from '@nuxtjs/composition-api'
import useSetFavicon from '~/vue/useSetFavicon'

export default defineComponent({
  setup() {
    const { route, redirect } = useContext()

    // prettier-ignore
    const username = computed(() => {
      const name         = route.value.params.username
      const firstLetters = name.slice(0, 3)
      const lastLetters  = name.slice(name.length - 3, name.length)

      return name.length == 34 
        ? `${firstLetters}...${lastLetters}` 
        : `@${name}`
    })

    onMounted(() => {
      if (route.value.params.username !== process.env.devUsername) {
        redirect('/')
      }

      useSetFavicon()
    })

    return {
      // username,
      username,
    }
  },

  layout: 'profile',
})
