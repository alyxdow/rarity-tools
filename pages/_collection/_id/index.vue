<template>
  <div class="ape">
    <div class="ape__close" @click="clearApe">
      <img src="~/assets/svg/close-icon-mobile.svg" alt="close" class="ape__close-icon ape__close-icon--mobile" />
    </div>

    <div class="ape__loading" v-if="!ape">
      <h1 class="ape__loading-title">Loading #{{ $route.params.id }}...</h1>
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
          <img src="https://boredapetronclub.com/favicon.png" class="ape__cta-image" alt="bored ape" />
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
          <div class="ape__share">
            <i class="ape__share-icon ri-share-fill" @click="showShareMenu = !showShareMenu"></i>
            <transition name="menu">
              <ul class="ape__share-menu" v-if="showShareMenu">
                <i class="ape__share-triangle ri-arrow-up-s-fill"></i>
                <li class="ape__share-item" @click="copyUrl">
                  <span class="ape__share-link" v-clipboard:copy="url + $route.fullPath">Copy URL</span>
                  <i class="ape__share-link-icon ri-check-line" v-if="linkCopied"></i>
                </li>
              </ul>
            </transition>
          </div>
        </div>

        <div class="ape__tabs"></div>
        <div class="ape__sort"></div>

        <div class="ape__traits">
          <ul>
            <li v-for="(trait, i) in traitsToShow" :key="i">
              <TraitRenderer :trait="trait" />
            </li>
          </ul>
        </div>

        <div class="ape__nones" @click="showNones = !showNones">
          <input type="checkbox" class="ape__nones-input" v-model="showNones" />
          <div class="ape__nones-icon">
            <div class="ape__nones-check" v-if="showNones"></div>
          </div>

          <span class="ape__nones-text">Show Nones</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
