<template>
  <div class="preview">
    <div class="preview__image">
      <img :src="ape.image" :alt="`ape #${ape.tokenId}`" class="preview__image-image" />
    </div>

    <div class="preview__container">
      <a :href="`https://boredapetronclub.com/ape/${ape.tokenId}`" class="preview__id" target="_blank">#{{ ape.tokenId }}</a>

      <div class="preview__content">
        <div class="preview__name">{{ ape.collection.name }} #{{ ape.tokenId }}</div>

        <div class="preview__score">
          Score:
          <span class="preview__score-score">{{ apeScore }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
