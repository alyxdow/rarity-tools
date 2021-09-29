<template>
  <!-- prettier-ignore -->
  <div class="filter__item" @click="toggleCollection()">
    <img 
      class="filter__item-icon--active" 
      :src="require(`~/assets/svg/${icon}-active.${type ? type : 'svg'}`)" 
      :alt="`${value} filter`" 
      v-if="value === $store.state.activeView"
    />

    <img 
      class="filter__item-icon" 
      :src="require(`~/assets/svg/${icon}.${type ? type : 'svg'}`)" 
      :alt="`${value} filter`" 
      v-else
    />
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
