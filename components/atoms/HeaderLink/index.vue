<template>
  <li class="header__item">
    <a
      :href="href"
      class="header__item-link"
      target="_blank"
    >
      <img :src="require(`~/assets/${type}/${icon}.${type}`)" alt="header item" class="header__item-icon" v-if="icon">
      <slot class="header__item-text" />
    </a>
  </li>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
