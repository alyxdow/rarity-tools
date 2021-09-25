import { defineComponent, onMounted, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { redirect } = useContext()

    onMounted(() => {
      if (!process.client) return
      const collection = localStorage.getItem('collection') || 'bored'

      redirect(`/${collection}`)
    })
  },

  render: h => h(),
})
