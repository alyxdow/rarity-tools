import { usePreferredDark, get, set, useFavicon } from '@vueuse/core'
import { computed } from '@nuxtjs/composition-api'
import { url } from '~/api/config'

/**
 * Composable to edit the favicon of a page
 * @param defaultIcon optional default icon path
 * @returns icon ref, to edit on a setup function
 */

// prettier-ignore
const useSetFavicon = (defaultIcon?: string) => {
  const icon = useFavicon()

  if (defaultIcon) return set(icon, defaultIcon)

  const userTheme = usePreferredDark()
  const iconTheme = computed(() => (get(userTheme) ? 'dark' : 'light')   )
  const iconUrl   = computed(() => `${url}/favicon/${get(iconTheme)}.png`)

  set(icon, get(iconUrl))

  return { icon }
}

export default useSetFavicon
