<script setup>
</script>

<template>
  <div class="profile-wrapper page">
    <div class="profile-main profile">
      <div class="flex">
        <img src="../assets/soft-girl-aesthetic.jpg"/>
      <h1>Innovate Her</h1>
      </div>
      <h2>
        Hello everyone, I am super excited to learn more about coding! I started with HTML and CSS and I'm hoping to ear the IBM certificate for Full-Stack developers
      </h2>
      <div class="external-links-list">
        <div class="external-link"><a href="https://github.com/Zuzanagrego/innovateher-hackathon/tree/main">My Hackathon team!</a></div>
        <div class="external-link"><a href="https://github.com/Zuzanagrego"><img class=external-link-img src="../assets/Zuzana.jpg"></a></div>
        <div class="external-link"><a href="https://github.com/mehakvirdy"><img class=external-link-img src="../assets/Mehak.png"></a></div>
        <div class="external-link"><a href="https://github.com/Betaser"><img class=external-link-img src="../assets/Tyler.png"></a></div>
      </div>
    </div>
    <div class="profile-certificates profile">
      <h2>
        Certificate of attending InnovateHER Hackathon 2024
      </h2>
    </div>
  </div>
</template>

<style>
.external-link-img {
  width: 80px;
  height: 80px;
  background-size: cover;
  padding: 0px;
}
.external-links-list {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  margin: 5px;
}
.external-link {
  display: flex;
  height: 80px;
  width: 150px;
  justify-content: space-between;
}
</style>