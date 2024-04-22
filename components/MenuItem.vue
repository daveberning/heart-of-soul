<template>
  <div class="menu-item">
    <div class="image">
      <img :src="item.image" alt="">
      <p>${{ item.price }} USD</p>
    </div>
    <div class="px-4 py-8">
      <p class="text-xl mb-4">{{ item.title }}</p>
      <p v-html="item.shortDescription" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: 0
    }
  },
}
</script>

<style lang="postcss" scoped>
.menu-item {
  border-radius: 2px;
  box-shadow:  0 0 10px rgba(0, 0, 0, 0.1);
  @apply border;
  @apply bg-white;
}

img {
  width: 100%;
  height: 15rem;
  object-fit: cover;
}

p:first-child {
  font-weight: bold;
}

.image {
  position: relative;
}

.image p {
  position: absolute;
  font-size: .9rem;
  bottom: 1rem;
  right: 1rem;
  font-weight: 700;
  @apply rounded;
  @apply bg-green-200;
  @apply py-2;
  @apply px-4;
}
</style>