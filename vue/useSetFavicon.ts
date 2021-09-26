import { usePreferredDark, get, useFavicon } from '@vueuse/core'
import { computed, onMounted } from '@nuxtjs/composition-api'
import { url } from '~/api/config'

// prettier-ignore
const useSetFavicon = (defaultIcon?: string) => {
  if (defaultIcon) return useFavicon(`${url}/${defaultIcon}`)

  const userTheme = usePreferredDark()
  const iconTheme = computed(() => (get(userTheme) ? 'dark' : 'light')   )
  const icon      = computed(() => `${url}/favicon/${get(iconTheme)}.png`)

  onMounted(() => useFavicon(get(icon)))
}

export default useSetFavicon
