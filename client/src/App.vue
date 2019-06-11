<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: { Header }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Rock+Salt&display=swap");
body {
  background-color: #f3f3f3;
  font-family: "Rock Salt", serif;

  h3 {
    color: #171717;
    font-size: 28px;
    font-weight: 700;
  }
}
</style>
