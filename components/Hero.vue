<template>
  <div id="hero">
    <div class="container">
      <div class="content lg:w-1/2">
        <h1>Delicious and Authentic Soul Food</h1>
        <p>We take pride in offering a wide variety of mouthwatering dishes that are made with only the freshest and highest quality ingredients.</p>
        <a href="#" class="btn-cta mt-8">View Menu</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="postcss">
h1 {
  font-weight: 900;
  @apply text-7xl;
}

p {
  @apply text-lg;
  @apply mt-8;
}

.content {
  @apply py-40;
}
</style>