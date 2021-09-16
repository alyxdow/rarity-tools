<template>
  <main class="main">
    <div class="main__container">
      <div v-if="ape">
        <img :src="ape.image" alt="ape" />
      </div>
      <div>
        <form @submit.prevent="filter" class="main__form">
          <input type="number" class="main__form-input" v-model="apeId" />
          <button class="main__form-submit">Filter</button>
        </form>
        <div class="main__info">
          <pre>{{ ape }}</pre>
          <hr class="my-5" />
          <div v-if="error" class="main__info main__info--danger">Error.</div>
          <div v-else-if="loading">Loading...</div>
          <div v-else class="flex items-center justify-between">
            <pre>{{ apeRarity }}</pre>
            <div>
              <span>Score</span>
              <pre class="text-5xl">{{ apeScore }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./styles.scss" scoped></style>
