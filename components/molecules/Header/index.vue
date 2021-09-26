<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo" @click="goHome">
        <div class="header__logo--mobile">
          <transition name="icon">
            <img
              src="~/assets/svg/logo-icon.svg"
              alt="Logo"
              v-if="mobileScroll"
              class="header__logo-icon"
              :class="{ disabled: $route.fullPath != '/home' }"
            />
          </transition>
          <img src="~/assets/svg/logo.svg" class="header__logo-img" alt="Logo" />
        </div>

        <div class="header__logo--desktop">
          <img src="~/assets/svg/logo-icon.svg" class="header__logo-icon" alt="Logo" :class="{ scrolled: desktopScroll }" />
          <img src="~/assets/svg/logo-text.svg" class="header__logo-text" alt="Logo" />
        </div>
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a
              href="https://odd-cave-7cc.notion.site/Apexgo-io-a3e697ef5cc14ad782112c52cb627896"
              class="header__nav-link"
              target="_blank"
            >
              Learn
            </a>
          </li>

          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Get in Touch</a>
          </li>

          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Submit</a>
          </li>
        </ul>
      </nav>
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
