<template>
  <div class="main">
    <div class="main__tabs">
      <ul class="main__tabs-list">
        <li
          class="main__tabs-item"
          :class="{
            'main__tabs-item--active': actualCollection === collection.name,
          }"
          v-for="collection in collections"
          :key="collection.value"
          @click="toggleCollection(collection.name)"
        >
          {{ collection.name }}
        </li>
      </ul>
    </div>

    <div class="main__gallery">
      <div class="main__gallery-image" v-for="ape in randomApes" :key="ape.tokenId">
        <img :src="ape.image" alt="ape" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
