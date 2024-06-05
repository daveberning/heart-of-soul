<template>
  <site-header />
  <slot />
  <featured-content v-if="route.path !== '/'" title="Ready to Order?">
    <p>We're ready to take your order, just make the call! Everything is made with a purpose and fresh to order. Once placed, orders can be picked up at our location at <strong>{{ siteInfo.address }}</strong>.</p>
    <a href="#" class="btn-cta mt-8">Call to Order</a>
  </featured-content>
  <site-footer />
</template>

<script setup>
import siteInfo from '~/content/site/info.json'

const route = useRoute()
</script>

<style>
#featured {
  @apply px-4;
  @apply py-20;
}
</style>