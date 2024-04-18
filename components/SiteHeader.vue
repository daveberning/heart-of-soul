<template>
  <header>
    <div class="container">
      <nuxt-link to="/">{{ siteInfo.sitename }}</nuxt-link>
      <nav>
        <ul>
          <li><nuxt-link to="/menu">Menu</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/menu">Contact Us</nuxt-link></li>
          <li><button class="btn-cta">Call to Order</button></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import siteInfo from '~/content/site/info.json'
</script>

<style lang="postcss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  @apply text-white;
  @apply p-4;
  @apply bg-primary;
}

.container {
  display: flex;
  justify-content: space-between;

  @apply m-auto;
}

div > a:first-child {
  font-family: "Great Vibes", cursive !important;
  line-height: 2.5rem;
  margin: 0;
  font-size: 1.5rem;
}

nav ul {
  display: flex;
  gap: 1rem;
  align-items: center;
}

button {
  @apply py-2;
  @apply px-4;
  margin-left: 1rem
}
</style>