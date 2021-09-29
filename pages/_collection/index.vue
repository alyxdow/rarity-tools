<template>
  <div class="main">
    <div class="main__tabs">
      <div class="main__tabs__container">
        <ul class="main__tabs-list">
          <li
            class="main__tabs-item"
            v-for="collection in collections"
            :key="collection.value"
            @click="toggleCollection(collection)"
            :class="{ 'main__tabs-item--active': collectionValue.value === collection.value }"
          >
            <nuxt-link :to="`/${collection.value}`">
              {{ collection.name }}
            </nuxt-link>
          </li>
        </ul>

        <!-- prettier-ignore -->
        <div class="main__view">
          <HomeView value="gallery"   icon="filter-gallery"   type="svg" />
          <HomeView value="thumbnail" icon="filter-thumbnail" type="svg" />
          <HomeView value="list"      icon="filter-list"      type="svg" />
        </div>
      </div>
    </div>

    <div v-if="apes" class="main__gallery" :class="activeView">
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
