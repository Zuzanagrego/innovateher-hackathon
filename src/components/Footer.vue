<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <footer >
<div class="footer">
  <div class="column">
    <i class="fas fa-home"></i>
    <a>Home</a>
  </div>
  <div class="column">
    <i class="fas fa-search"></i>
    <a>Search</a>
  </div>
  <div class="column">
    <i class="fas fa-briefcase"></i>
    <a>Jobs</a>
  </div>
  <div class="column">
    <i class="fas fa-file"></i>
    <a>Learn</a>
  </div>
  <div class="column">
    <i class="fas fa-user"></i>
    <a>Profile</a>
  </div>
</div>
  </footer>
</template>

