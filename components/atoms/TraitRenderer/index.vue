<template>
  <div class="trait">
    <span class="trait__name">{{ traitName }}</span>

    <div class="trait__content">
      <div class="trait__value">{{ traitValue ? traitValue : '&lt;none&gt;' }}</div>
      <div class="trait__count">{{ count }}</div>
    </div>

    <div class="trait__score" v-if="rarity">+{{ rarity }}</div>
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
