import { defineComponent, onMounted, useContext, computed } from '@nuxtjs/composition-api'
import useSetFavicon from '~/vue/useSetFavicon'

export default defineComponent({
  setup() {
    const { route, redirect } = useContext()

    // prettier-ignore
    /*
    const username = computed(() => {
      const name        = route.value.params.username
      const firstLetter = name.charAt(0)
      const rest        = name.slice(1)

      return `${firstLetter.toUpperCase()}${rest}`
    })
    */

    // prettier-ignore
    const username = computed(() => {
      const name         = route.value.params.username
      const firstLetter  = name.charAt(0)
      const rest         = name.slice(1)
      const firstLetters = name.slice(0, 3)
      const lastLetters  = name.slice(name.length - 3, name.length)

      return name.length == 34 
        ? `${firstLetters}...${lastLetters}` 
        : `${firstLetter.toUpperCase()}${rest}`
    })

    onMounted(() => {
      if (route.value.params.username !== process.env.devUsername) {
        // redirect('/')
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
