<template>
  <main>
    <section class="container">
      <h1 class="mb-8">{{ page.title }}</h1>
      <content-renderer-markdown :value="page.body" />
    </section>
  </main>
</template>

<script setup>
const route = useRoute()
const page = await queryContent(`/pages`, route.params.slug).findOne()
</script>

<style lang="postcss" scoped>
main {
  padding: 4rem 2rem;
}
</style>