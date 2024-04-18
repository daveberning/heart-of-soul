<template>
  <footer>
    <p>Copyright &copy; {{ year }}. Parsec Digital Media, LLC.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="postcss" scoped>
footer {
  text-align: center;
  @apply p-4;
  @apply bg-neutral-200;
}
</style>