<template>
  <section id="featured">
    <div class="container">
      <component :is="titleTag">{{ title }}</component>
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  titleTag: {
    type: String,
    default: 'h2'
  },
})
</script>

<style lang="postcss" scoped>
#featured {
  text-align: center;
  @apply bg-primary-200;
  @apply text-primary;

  h2 {
    @apply text-3xl;
    font-weight: 900;

    @media screen and (min-width: 768px) {
      @apply text-5xl;
    }
  }
}
</style>