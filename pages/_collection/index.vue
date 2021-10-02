<script lang="ts">
import { defineComponent, onMounted, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { redirect } = useContext()
    onMounted(() => redirect('/'))
  }
})
</script>

<template>
  <div />
</template>
