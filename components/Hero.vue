<template>
  <div id="hero" :style="`background-image: url(${image})`">
    <div class="container">
      <div class="content xs:w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-1/2">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <nuxt-link to="/menu" class="btn-cta mt-8">View Menu</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="postcss">
#hero {
  background-size: cover;
  background-repeat: no-repeat;
}

h1 {
  font-weight: 900;
  @apply text-3xl;

  @media screen and (min-width: 768px) {
    @apply text-7xl;
  }
}

p {
  @apply text-lg;
  @apply mt-8;
}

.content {
  position: relative;
  color: white;
  background: rgba(32, 32, 32, 0.8);
  @apply p-10;

  @media screen and (min-width: 800px) {
    @apply py-40;
    @apply px-16;
  }

  &::after {
    content: '';
    display: block;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100vw;
    background: inherit;
  }
}


</style>