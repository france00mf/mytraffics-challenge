<template>
  <div class="home">
        <!-- Header -->
        <Header></Header>
        <!-- Esta é a minha definição do footer -->
        <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/home/header.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>
