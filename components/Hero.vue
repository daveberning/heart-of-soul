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
#hero {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvoJuSbgwx1oU0I-3ZVsuLULBFDqjeO3vJ9gnJDHv2Vg&s');
  background-size: cover;
  background-repeat: no-repeat;
}

h1 {
  font-weight: 900;
  @apply text-7xl;
}

p {
  @apply text-lg;
  @apply mt-8;
}

.content {
  position: relative;
  color: white;
  background: rgba(32, 32, 32, 0.9);
  @apply py-40;
  @apply px-16;

  &::after {
    content: '';
    display: block;
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100vw;
    background: inherit;
  }
}


</style>