<template>
  <main>
    <section class="container">
      <h1 class="mb-8">{{ page.title }}</h1>
      <content-renderer-markdown :value="page.body" />
    </section>
  </main>
</template>

<script setup>
import siteInfo from '~/content/site/info.json'

const route = useRoute()
const page = await queryContent(`/pages`, route.params.slug).findOne()

useHead({
  title: `${page.title} | ${siteInfo.sitename}`,
})
</script>

<style lang="postcss" scoped>
main {
  padding: 4rem 2rem;
}

:deep(img) {
  max-width: 400px;
  height: auto;
  margin: 0 auto;
}
</style>