<template>
  <div class="ape">
    <div class="ape__close" @click="clearApe">
      <img src="~/assets/svg/close-icon-mobile.svg" alt="close" class="ape__close-icon ape__close-icon--mobile" />
    </div>

    <div class="ape__error" v-if="error">
      <h1 class="ape__error-title">An error has occurred</h1>
    </div>

    <div class="ape__success" v-else>
      <div class="ape__left">
        <div class="ape__rank">
          <!-- <InfoToast text="Rarity rank: #0000" info="Owner: Art1k" /> -->
        </div>

        <div class="ape__image">
          <img :src="ape.image" :alt="`ape #${ape.tokenId}`" />
        </div>

        <div class="ape__name">
          <span class="ape__name-collection">{{ ape.collection.name }} #{{ ape.tokenId }}</span>
          <span class="ape__name-id">ID {{ ape.tokenId }}</span>
        </div>

        <a class="ape__cta" :href="`https://boredapetronclub.com/ape/${ape.tokenId}#${collection}`" target="_blank">
          <img src="~/assets/svg/bored-ape-logo.svg" class="ape__cta-image" alt="bored ape" />
          <div class="ape__cta-content">
            <span class="ape__cta-text">View on Bored Ape Tron Club</span>
            <!-- <span class="ape__cta-price">199.99 ETH</span> -->
            <div></div>
          </div>
        </a>
      </div>

      <div class="ape__divisor"></div>

      <div class="ape__right">
        <div class="ape__rarity">
          <InfoToast text="Rarity Score" :info="`${apeScore}`" />
        </div>
        <div class="ape__tabs"></div>
        <div class="ape__sort"></div>
        <div class="ape__traits">
          <ul>
            <li v-for="trait in traits" :key="trait[0]">
              <TraitRenderer :trait="trait" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
