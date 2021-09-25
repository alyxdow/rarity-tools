<script lang="ts">
import { defineComponent, onMounted, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { redirect } = useContext()

    onMounted(() => {
      const collection = localStorage.getItem('collection') || 'bored'

      redirect(`/${collection}`)
    })
  },
})
</script>

<template>
  <div></div>
</template>
