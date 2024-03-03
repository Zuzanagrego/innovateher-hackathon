<script setup>
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app-container">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>