<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'


export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch("getCategoryList");
  },
}
</script>

<style>
</style>
