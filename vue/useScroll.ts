import { onMounted, onUnmounted, ref } from '@nuxtjs/composition-api'

/**
 * Composable to listen to scroll event to window
 * @param amount of pixels to Y offset
 * @returns a boolean to verify the page scroll
 */

export const useScroll = (amount: number) => {
  const hasScrolled = ref(false)

  const handleScroll = () => {
    if (window.scrollY >= amount) hasScrolled.value = true
    else hasScrolled.value = false
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { hasScrolled }
}
