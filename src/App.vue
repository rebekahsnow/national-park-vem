<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  created(){
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  },
  methods:{
    async accept() {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  }
}
</script>

<style>
.v-application--wrap{
    min-height: 0vh !important;
}
@font-face{
    font-family: "main";
    src: url("../src/assets/fonts/Roboto/Roboto-Light.ttf");
}
@font-face{
    font-family: "regularRoboto";
    src: url("../src/assets/fonts/Roboto/Roboto-Regular.ttf");
}
@font-face{
    font-family: "boldRoboto";
    src: url("../src/assets/fonts/Roboto/Roboto-Bold.ttf");
}
@font-face{
    font-family: "mediumRoboto";
    src: url("../src/assets/fonts/Roboto/Roboto-Medium.ttf");
}
@font-face{
    font-family: "title";
    src: url("../src/assets/fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf")
}
@font-face{
    font-family: "robotoTitle";
    src: url("../src/assets/fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf")
}
@font-face{
    font-family: "extraBold";
    src: url("../src/assets/fonts/Roboto_Slab/static/RobotoSlab-ExtraBold.ttf")
}
*{
    font-family: "main";
    font-size: 16px;
    font-weight: normal;
}
html, body{
    overflow: auto;
    height: 100%;
    background-color: #FFFFFF;
}
body{
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1E252B;
}
</style>


