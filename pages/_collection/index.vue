<template>
  <div class="main">
    <Gallery 
      v-if="nfts" 
      :data="nfts" 
      :view="view" 
      :pages="collections"
      :limit="6"
      sort="tokenId"
    />
  </div>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
