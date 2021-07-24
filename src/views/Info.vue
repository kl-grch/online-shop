<template>
  <div class="info">
    <h2>{{info.name}}</h2>
    <div class="allinfo">
    <div>
    <img :src="require('../assets/'+selected)" style="width: 80%; height: auto">
    <p><b>Price:</b> {{info.price}} ₽</p>
    <button type="button" class="btn btn-success" @click="order(info)">Add to order</button>
    </div>
      <div>
      <p v-if="info.memory"><b>Memory:</b> {{info.memory}} Gb</p>
      <p><b>Color:</b> {{info.color}}</p>
      <p><b>OS:</b> {{info.os}}</p>
        <p v-if="info.diagonal"><b>Diagonal:</b> {{info.diagonal}}</p>
        <p v-if="info.chip"><b>Chip:</b> {{info.chip}}</p>
    </div>
    </div>
    <div class="gallery">
    <div v-for="pic in info.imgs" :key="pic.id">
      <img :src="require('@/assets/' + pic.img)" height="100" @click="getImg(pic.img)">

    </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Info",
  computed: {
    info() {
      return this.$store.getters.getDeviceById(this.$route.params.id);
    },
  },
  data: function (){
    return{
      selected: ''
    }
  },
  beforeMount() {
    this.selected = this.info.img;
  },
  methods: {
    order(info) {
      this.$store.commit('addToOrder', {device: info});
    },
    getImg: function getImg(src){
      this.selected = src;
    }
  }
}
</script>

<style scoped>

.gallery {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
}

.info {
  text-align: center;
  margin-bottom: 10%;
}

.allinfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  margin-bottom: 20px;
  justify-content: space-evenly;
}

@media screen and (max-width: 600px) {
  .info {
    width: 100%;
  }

  .allinfo {
    flex-direction: column;
  }

}


</style>