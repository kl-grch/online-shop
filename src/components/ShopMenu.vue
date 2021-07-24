<template>
  <div class="menu">
<router-link v-for="tab in tabs" :key="tab.name" :to="tab.path">
  {{tab.pic}}{{tab.name}}
</router-link>
  </div>
</template>

<script>
export default {
  name: "ShopMenu",
  data(){
    return {
      tabs: [
        {name: "Phones", pic: "📱", path: '/phones'},
        {name: "Notebooks", pic: "💻", path: '/notebooks'},
        {name: "TV`s", pic: "📺", path: '/tv'}
      ]
    }
  }
}
</script>

<style scoped>

.menu {
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  background-color: rgba(255, 165, 0, 0.05);
  height: auto;
  margin-right: 5px;
}

.menu > a {
  text-decoration: none;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
}

.menu > a:hover {
  color: orange;
  text-transform: uppercase;
}

@media screen and (max-width: 600px){

.menu {
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
}
  .menu > a:hover {
    background-color: rgba(255, 165, 0, 0.09);
  }
}


</style>