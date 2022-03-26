<template>
 <Navbar/>
 <Footer/>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Navbar, Footer,
  }
}
</script>

<style scoped>
#app{
  width: 100% !important;
  /* overflow:none !important; */
}


</style>
