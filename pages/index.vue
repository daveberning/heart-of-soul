<template>
  <main>
    <hero :title="siteInfo.herotitle" :content="siteInfo.herocontent" :image="siteInfo.heroimage" />
    <featured-content title="New Food Weekly">
      <p>New menu items and meals will be prepared and available each week. Our menu will change frequently so please reach out to see what we're cooking in the kitchen!</p>
      <nuxt-link to="/contact" class="btn-cta mt-8">Ask the Chef</nuxt-link>
    </featured-content>
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
import FeaturedContent from '~/components/FeaturedContent.vue'
import siteInfo from '~/content/site/info.json'

const menuItems = await queryContent(`/menu`).find()
const featuredItems = computed(() => menuItems.filter((item) => item.featured && item.active))

useHead({
  title: `Home | ${siteInfo.sitename}`,
})
</script>

<style lang="postcss" scoped>
section {
  @apply px-4;
  @apply py-20;
  @apply bg-neutral-100;
}
</style>