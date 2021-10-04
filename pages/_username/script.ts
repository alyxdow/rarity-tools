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

      // TODO: Verify if the user is logged on Tron or Twitter here
      return name.length == 34 
        ? `${firstLetters}...${lastLetters}` 
        : `@${name}`
    })

    onMounted(() => {
      if (route.value.params.username !== process.env.devUsername) {
        redirect('/')
      }

      // TODO: Tron connection, Twitter connection

      useSetFavicon()
    })

    return {
      // username,
      username,
    }
  },

  layout: 'profile',
})
