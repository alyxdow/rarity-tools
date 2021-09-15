<template>
  <main class="main">
    <div class="main__container">
      <pre class="main__info main__info--danger" v-if="error">Error</pre>
      <pre class="main__info" v-else-if="loading">Loading...</pre>
      <pre class="main__info" v-else>{{ val }}</pre>
    </div>
  </main>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./styles.scss" scoped></style>
