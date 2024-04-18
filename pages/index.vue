<template>
  <main>
    <hero />
    <section id="featured">
      <div class="container">
        <h2>New Food Weekly</h2>
        <p>New menu items and meals will be prepared and available each week. Our menu will change frequently so please reach out to see what we're cooking in the kitchen!</p>
        <a href="#" class="btn-cta mt-8">Ask the Chef</a>
      </div>
    </section>
    <section id="featured-menu-items">
      <div class="container m-auto">
        <h3 class="mb-4">Featured Menu Items</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <menu-item v-if="featuredItems" v-for="item in featuredItems" :item="item" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const menuItems = await queryContent(`/menu`).find()
const featuredItems = computed(() => menuItems.filter((item) => item.featured && item.active))
</script>

<style lang="postcss" scoped>
section {
  @apply px-4;
  @apply py-20;
  @apply bg-neutral-100;
}

#featured {
  text-align: center;
  @apply bg-primary-200;
  @apply text-primary;

  h2 {
    @apply text-5xl;
    font-weight: 900;
  }
}
</style>