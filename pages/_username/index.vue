<template>
  <main class="profile">
    <div class="profile__wrapper">
      <div class="profile__info">
        <img src="~/assets/img/logo-gray.png" alt="profile image" class="profile__info-image">
        <div class="profile__info-content">
          <h2 class="profile__info-name">{{ username }}</h2>
          <p class="profile__info-bio">
            Ability to bring Twitter Username, Profile Image, Link to their Twitter & Bio. 
          </p>

          <button class="profile__info-twitter">
            <img src="~/assets/svg/logo-twitter.svg" alt="twitter logo" />
            <span>Connect to Twitter</span>
          </button>
        </div>
      </div>
      <button class="profile__share">
        <i class="profile__share-icon ri-share-fill"></i>
      </button>
    </div>
  </main>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="scss" src="./style.scss"></style>
