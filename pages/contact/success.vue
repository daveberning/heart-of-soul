<template>
  <main>
    <div class="container">
      <h1>Success</h1>
      <div class="contact-wrapper">
        <p>Thank you for your message. If this is an order, we will be contacting you shortly to confirm!</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import siteInfo from '~/content/site/info.json'

useHead({
  title: `Contact | ${siteInfo.sitename}`,
})
</script>

<style lang="postcss" scoped>
.contact-wrapper {
  display: grid;
  gap: 2rem;
  grid-template-columns: 2fr 1fr;
}

main { padding: 4rem 2rem; }

form {
  display: grid;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

input,
textarea {
  @apply p-2;
  @apply border;
  @apply border-neutral-300;
  @apply rounded;
  @apply w-full;
  @apply mb-4;
}

.textarea {
  grid-column: span 2;
}

label {
  font-family: 'Roboto', sans-serif;
  @apply block;
  @apply mb-2;
  @apply text-neutral-800;
}
</style>