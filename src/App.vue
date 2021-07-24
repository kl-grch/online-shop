<template>
  <shop-header></shop-header>
  <div class="container">
  <shop-menu class="col-3" style="height: 100%"></shop-menu>
  <router-view class="col-9"></router-view>
  </div>
  <shop-footer class="footer"></shop-footer>
</template>

<script>
import ShopHeader from "./components/ShopHeader";
import ShopFooter from "./components/ShopFooter";
import ShopMenu from "./components/ShopMenu";
export default {
  components: {ShopMenu, ShopFooter, ShopHeader}
}
</script>

<style>

.container {
  display: flex;
  margin-right: 10%;
  margin-left: 10%;
  width: 80%;
  margin-bottom: 5%;
}

@media screen and (max-width: 600px){

  .container {
    flex-direction: column;
  }
}
</style>