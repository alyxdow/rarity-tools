<template>
  <header class="header">
    <div class="header__logo">
      <img src="~/assets/svg/logo-desktop.svg" class="header__logo-img header__logo-img--desktop" alt="Logo" />
      <img src="~/assets/svg/logo-mobile.svg" class="header__logo-img header__logo-img--mobile" alt="Logo" />
    </div>

    <form class="header__form" @submit.prevent="evaluateApe">
      <h2 class="header__form-title">Look for your NFT</h2>
      <div class="header__form-field">
        <label class="header__form-label" for="header-select">Select Collection</label>
        <VSelect
          v-model="collection"
          :options="collections"
          :searchable="false"
          :clearable="false"
          id="header-select"
          class="header__form-select"
        />
      </div>

      <div class="header__form-field">
        <label class="header__form-label" for="header-input">ID...</label>
        <div class="header__form-id">
          <input type="number" class="header__form-input" id="header-input" v-model="apeId" placeholder="268" />
          <input type="submit" class="header__form-submit" value="Lookup" />
        </div>
      </div>
    </form>
  </header>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
