<template>
  <div class="gallery">
    <div class="gallery__tabs-wrapper">
      <div class="gallery__tabs">
        <ul class="gallery__tabs-list">
          <li
            class="gallery__tabs-item"
            :class="{ 'gallery__tabs-item--active': actualPage === page, }"
            v-for="page in pages"
            :key="page.value"
            @click="togglePage(page)"
          >
            {{ page.name }}
          </li>
        </ul>

        <div class="gallery__view">
          <GalleryView
            v-for="view in views"
            :key="view"
            :value="view"
            :icon="`filter-${view}`"
            type="svg"
            :side="side(view)"
            :active="activeView == view"
            @click.native="activeView = view"
          />
        </div>
      </div>
    </div>

    <div class="gallery__images" :class="activeView" v-if="nfts">
      <div class="gallery__images-preview" v-for="nft in nfts" :key="nft.tokenId">
        <NFTPreview :nft="nft" :activeView="activeView" />
      </div>
    </div>

    <div class="gallery__loading" v-else>
      <p class="gallery__loading-text">Loading...</p>
    </div>

    <div class="gallery__load" v-show="nfts && limit">
      <button class="gallery__load-btn" @click="getMoreNFT">Load more</button>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
