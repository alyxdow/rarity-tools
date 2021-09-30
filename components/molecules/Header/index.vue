<template>
  <header class="header">
    <div class="header__container" ref="navContainer">
      <div class="header__logo" @click="goHome">
        <div class="header__logo--mobile">
          <img src="~/assets/svg/logo.svg" class="header__logo-img" alt="Logo" />
        </div>

        <div class="header__logo--desktop">
          <img src="~/assets/svg/logo-icon.svg" class="header__logo-icon" alt="Logo" :class="{ scrolled: desktopScroll }" />
          <img src="~/assets/svg/logo-text.svg" class="header__logo-text" alt="Logo" />
        </div>
      </div>

      <nav class="header__nav">
        <img class="header__nav-toggler" src="~/assets/svg/hamburger.svg" alt="hamburger" @click="toggleModal">
        <!-- prettier-ignore -->
        <transition name="menu">
          <div class="header__nav--mobile" v-show="showModal">
            <img class="header__nav-list-triangle" src="~/assets/svg/toolbox-triangle.svg" alt="hamburger">

              <ul class="header__nav-list">
                <HeaderLink 
                  href="https://apexgo.notion.site/apexgo/Apexgo-io-a3e697ef5cc14ad782112c52cb627896"
                  icon="book"
                >
                  Learn
                </HeaderLink>

                <HeaderLink
                  href="https://notionforms.io/forms/send-us-a-message-1"
                  icon="at"
                >
                  Get in Touch
                </HeaderLink>

                <HeaderLink
                  href="https://notionforms.io/forms/submit-your-nft-project-to-apexgoio"
                  icon="cloud"
                >
                  Submit
                </HeaderLink>
              </ul>
          </div>
        </transition>

        <div class="header__nav--desktop">
          <ul class="header__nav-list">
            <HeaderLink 
              href="https://apexgo.notion.site/apexgo/Apexgo-io-a3e697ef5cc14ad782112c52cb627896"
              icon="book"
            >
              Learn
            </HeaderLink>

            <HeaderLink
              href="https://notionforms.io/forms/send-us-a-message-1"
              icon="at"
            >
              Get in Touch
            </HeaderLink>

            <HeaderLink
              href="https://notionforms.io/forms/submit-your-nft-project-to-apexgoio"
              icon="cloud"
            >
              Submit
            </HeaderLink>
          </ul>
        </div>
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
