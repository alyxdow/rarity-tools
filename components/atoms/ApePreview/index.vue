<template>
  <div :class="`${$store.state.activeView} preview`">
    <div class="preview__image">
      <img :src="ape.image" :alt="`ape #${ape.tokenId}`" class="preview__image-image" />
    </div>

    <div class="preview__id">#{{ ape.tokenId }}</div>
    <div class="preview__container" @click="evaluateApe">
      <div class="preview__content">
        <div class="preview__name">{{ ape.collection.name }} #{{ ape.tokenId }}</div>

        <div class="preview__score">
          Score:
          <span class="preview__score-score">{{ apeScore ? apeScore : 'Loading...' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
