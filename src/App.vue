<template>
  <div id="app">
        <div class="header">
        <img class="back-arrow" src="../src/assets/backArrow.png" v-if="notHome" @click="$router.go(-1)">
        <router-link to="/"><img class="logo" src="../src/assets/parkspassLogo.png"></router-link>
        </div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
        <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      notHome: false
    }
  },
  watch:{
      $route (){
        if(this.$route.name != 'Home'){
          this.notHome = true;
        }else{
          this.notHome = false;
        }
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1E252B;
}
.header{
  height: 72px;
  background-color: #1E252B;
}
.logo{
  float: left;
  margin-top: 16px;
  margin-left: 16px;
  height: 42px;
  cursor: pointer;
}
.back-arrow{
  float: left;
  margin: 16px;
  vertical-align: middle;
  margin-top: 26px;
  cursor: pointer;
}
.back-arrow:hover{
  opacity: .8;
}
</style>
