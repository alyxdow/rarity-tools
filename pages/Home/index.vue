<template>
  <div class="main">
    <div class="main__tabs">
      <ul class="main__tabs-list">
        <li
          class="main__tabs-item"
          :class="{
            'main__tabs-item--active': selectedCollection === collection,
          }"
          v-for="collection in collections"
          :key="collection.value"
          @click="toggleCollection(collection)"
        >
          {{ collection.name }}
        </li>
      </ul>
    </div>

    <div class="main__gallery">
      <div class="main__gallery-image" v-for="ape in randomApes" :key="ape.tokenId">
        <ApePreview :ape="ape" />
      </div>
    </div>

    <div class="main__load">
      <button class="main__load-btn" @click="getMoreRandomApes(6, 216)">Load more</button>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
