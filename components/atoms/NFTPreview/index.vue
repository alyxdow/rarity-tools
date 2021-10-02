<template>
  <div class="preview" :class="`preview--${activeView}`">
    <div class="preview__image">
      <img :src="nft.image" :alt="`ape #${nft.tokenId}`" class="preview__image-image" />
    </div>

    <div class="preview__id">#{{ nft.tokenId }}</div>
    <div class="preview__container" @click="evaluateApe">

      <div class="preview__content">
        <div class="preview__name">{{ nft.collection.name }} #{{ nft.tokenId }}</div>

        <div class="preview__score" v-if="apeScore">
          Score:
          <span class="preview__score-score">{{ apeScore }}</span>
        </div>

        <div class="preview__loading" v-else>
          <span class="preview__loading-title">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
