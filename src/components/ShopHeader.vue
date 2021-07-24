<template>
<div class="header">
  <div class="logo header-elem">
    <router-link to="/">
  <img src="../assets/logo.png" alt="logo">
    </router-link>
  </div>

  <div class="header-elem">
  <input list="search" type="search" placeholder="Search" class="form-control mr-sm-2" v-model="search">

    <datalist id="search">
    <option v-for="item in searchItems" :key="item.id">
      <router-link  :to="{name:'Info', params: {id: item.id}}" class="title">
        {{item.name}}
      </router-link>
    </option>
    </datalist>
    </div>

  <div class="header-elem">
    <router-link to="/order">
    <button type="button" class="btn btn-outline-secondary" style="min-width: 111px">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
      <span v-if="$store.state.count>0" class="count badge badge-warning">{{$store.state.count}}</span>
      Order</button>
    </router-link>
  </div>
  <div class="header-elem">
    <router-link to="/login">
  <button type="button" class="btn btn-outline-dark" style="min-width: 111px">Log In</button>
    </router-link>
  </div>
</div>
  <div class="color-bar">
     <p><b>line</b></p>
  </div>

  <hr>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ShopHeader",
  data(){
    return {
      // allArticles: allTV,
      search: "",
    }
  },

  computed: {

    ...mapGetters(['allItems']),
    searchItems(){
      return this.allItems.filter(({name})=> name.toUpperCase().includes(this.search.toUpperCase()));
    }


  },
}
</script>

<style scoped>

.header {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 5px;

}

.logo > a > img {
  display: inline-block;
  width: 112px;
  max-width: 100%;
}

.color-bar {
  background-color: black;
  color: white;
}

.count {
  color: red;
}

@media screen and (max-width: 600px) {
  .header-elem {
    width: 50%;
    text-align: center;
    padding: 5px;
  }
}

</style>