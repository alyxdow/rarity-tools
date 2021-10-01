<template>
  <div class="main">
    <div class="main__tabs-wrapper">
      <div class="main__tabs">
        <ul class="main__tabs-list">
          <li
            class="main__tabs-item"
            :class="{
              'main__tabs-item--active': collectionValue.value === collection.value,
            }"
            v-for="collection in collections"
            :key="collection.value"
            @click="toggleCollection(collection)"
          >
            <nuxt-link :to="`/${collection.value}`">
              {{ collection.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>


    <div class="main__gallery" v-if="apes">
      <div class="main__gallery-image" v-for="ape in apes" :key="ape.tokenId">
        <ApePreview :ape="ape" />
      </div>
    </div>

    <div class="main__loading" v-else>
      <p class="main__loading-text">Loading...</p>
    </div>

    <div class="main__load" v-show="apes">
      <button class="main__load-btn" @click="getMoreApes(6, 216)">Load more</button>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
