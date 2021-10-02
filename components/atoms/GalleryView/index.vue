<template>
  <!-- prettier-ignore -->
  <div class="view__item" :class="side">
    <img 
      class="view__item-icon--active" 
      :src="require(`~/assets/svg/${icon}-active.${type ? type : 'svg'}`)" 
      :alt="`${value} view`" 
      v-if="active"
    />

    <img 
      class="view__item-icon" 
      :src="require(`~/assets/svg/${icon}.${type ? type : 'svg'}`)" 
      :alt="`${value} view`" 
      v-else
    />
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
