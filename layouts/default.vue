<template>
  <site-header />
  <slot />
  <featured-content v-if="route.path !== '/'" title="Ready to Order?">
    <p>Integer pretium elit eu cursus fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Integer euismod dui nec metus tempor vehicula sed ut elit. Nunc quis molestie velit. Fusce vitae aliquam erat. </p>
    <a href="#" class="btn-cta mt-8">Call to Order</a>
  </featured-content>
  <site-footer />
</template>

<script setup>
const route = useRoute()
</script>

<style>
#featured {
  @apply px-4;
  @apply py-20;
}
</style>