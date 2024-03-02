<template>
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
