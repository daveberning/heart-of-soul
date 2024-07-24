<template>
  <main>
    <div class="container">
      <h1>Contact Us</h1>
      <div class="contact-wrapper">
        <form name="contact" action="/contact/success" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <input name="bot-field" />
          <div v-for="field in fields" :class="field.type">
            <label :for="field.id" :id="field.id">{{ field.label }}</label>
            <input v-if="field.type !== 'textarea'" :id="field.id" :name="field.id" :type="field.type" required>
            <textarea v-else :id="field.id" :name="field.id" rows="10" required></textarea>
          </div>
          <button type="submit" class="btn-cta">Submit</button>
        </form>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.4828723461848!2d-84.68183633037488!3d38.97123234088972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841c698774415c1%3A0xe8d227bae1826e24!2s2672%20Ridgecrest%20Dr%2C%20Florence%2C%20KY%2041042!5e0!3m2!1sen!2sus!4v1713751084962!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </main>
</template>

<script setup>
import siteInfo from '~/content/site/info.json'

const fields = ref([
  { label: 'First Name', id: 'fname', type: 'text', required: true },
  { label: 'Last Name', id: 'flame', type: 'text', required: true },
  { label: 'Email Address', id: 'email', type: 'email', required: true },
  { label: 'Phone Number', id: 'phone', type: 'phone', required: true },
  { label: 'Message', id: 'message', type: 'textarea', required: true },
])

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

[name="bot-field"] {
  display: none;
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