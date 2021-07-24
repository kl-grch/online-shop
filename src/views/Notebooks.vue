<template>
  <div class="all">
    <div v-for="item in allNotebooks" :key="item.id" class="item">
      <router-link :to="{name: 'Info', params: {id: item.id}}">
        <h5>{{item.name}}</h5>
        <img :src="require('@/assets/' + item.img)">
        <p><b>Price:</b> {{item.price}} ₽</p>
      </router-link>
      <button type="button" class="btn btn-success" @click="order(item)">Add to order</button>
      <hr>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "Notebooks",
  computed: {
    ...mapGetters(['allNotebooks'])
  },
  methods:{
    order(item){
      this.$store.commit('addToOrder', {device: item});
    }
  }
}
</script>

<style scoped>

img {
  width: 40%;
  /*width: 100px;*/
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-around;
  width: 50%;
  margin-bottom: 10px;
}

.item > a {
  text-decoration: none;
  color: black;
  text-align: center;
}

.item > a:hover {
  color: brown;
}

.all {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10%;
}

hr {
  visibility: hidden;
}


@media screen and (max-width: 600px){

  .all {
    flex-direction: column;
    width: 100%;
  }
  hr {
    width: 100%;
    visibility: visible;
  }

}

</style>