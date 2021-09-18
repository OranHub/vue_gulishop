<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("get_reqcategorylist");
    //console.log(this.$router); router存放的是方法
    //console.log( this.$route); route中存数据
  },
  components: { Header, Footer },
};
</script>

<style>
</style>