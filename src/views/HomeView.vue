<template>
  <header>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
  </header>
  <div class="home">
    Hello
    <Certificate />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "../components/Footer.vue"
import Certificate from "../components/Certificate.vue";

export default {
  name: 'HomeView',
  components: {
    Certificate,
    Footer
  }
}
</script>
