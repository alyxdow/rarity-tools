<template>
  <main class="main">
    <div class="main__container">
      <div class="main__info">
        <pre class="main__info--danger" v-if="error">Error</pre>
        <pre v-else-if="loading">Loading...</pre>
        <div v-else>
          <span>
            <h2 class="text-2xl">Ape:</h2>
            <pre class="mt-2">{{ ape }}</pre>
          </span>

          <hr class="my-12" />

          <span>
            <h2 class="text-2xl">Worth:</h2>
            <pre class="mt-2">{{ apeScore }}</pre>
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./styles.scss" scoped></style>
