<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <footer >
<div class="flex">
  <img class="logo-img" src="../assets/android-chrome-512x512.png"/>
  <div class="column">
    <RouterLink to="/">
      <i class="fas fa-home"></i>
      <h5>Home</h5>
    </RouterLink>
  </div>
  <div class="column">
    <RouterLink to="/search">
      <i class="fas fa-search"></i>
      <h5>Professionals</h5>
    </RouterLink>
  </div>
  <div class="column">
    <RouterLink to="/jobs">
      <i class="fas fa-briefcase"></i>
      <h5>Jobs</h5>
    </RouterLink>
  </div>
  <div class="column">
    <RouterLink to="/learn">
      <i class="fas fa-file"></i>
      <h5>Learn</h5>
    </RouterLink>
  </div>
  <div class="column">
    <RouterLink to="/profile">
      <i class="fas fa-user"></i>
      <h5>Profile</h5>
    </RouterLink>
    
  </div>
</div>
  </footer>
</template>

