<template>
  <main class="container m-auto">
    <section v-for="section in availableSections">
      <h2>{{ section.name }}</h2>
      <div class="grid-5">
        <menu-item v-for="item in section.items" :item="item" />
      </div>
    </section>
  </main>
</template>

<script setup>
import siteInfo from '~/content/site/info.json'

const menuItems = await queryContent(`/menu`).find()

const sections = computed(() => [
  { name: 'Appetizers', items: menuItems.filter((item) => item.category === 'Appetizer' && item.active) },
  { name: 'Entrees', items: menuItems.filter((item) => item.category === 'Entree' && item.active) },
  { name: 'Sides', items: menuItems.filter((item) => item.category === 'Side' && item.active) },
  { name: 'Desserts', items: menuItems.filter((item) => item.category === 'Dessert' && item.active) }
])

const availableSections = computed(() => sections.value.filter((section) => section.items.length))

useHead({
  title: `Menu | ${siteInfo.sitename}`,
})
</script>

<style lang="postcss" scoped>
h2 {
  @apply mb-4;
}

main {
  @apply py-8;
  @apply px-4;
  @apply m-auto;
}

section {
  @apply mb-12;
}
</style>
