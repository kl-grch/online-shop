<template>
    <div class="order">
      <div v-if="$store.state.order.length">
        <h2>Selected items</h2>
        <table class="table">
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>Item</th>
            <th>Price/pc</th>
            <th>Quantity</th>
            <th>🗑</th>
          </tr>
          <tr v-for="item in $store.state.order" :key="item.id">
            <td id="item">
            </td>
            <td><img :src="require('../assets/' + item.img)" width="100"></td>
            <td>
              <router-link :to="{name:'Info', params: {id: item.id}}" class="title">{{item.name}}</router-link>
            </td>
            <td>{{item.price}} ₽</td>
            <td>
              <span @click="less(item)">⊖</span>{{item.quantity}}<span @click="more(item)">⊕</span>
            </td>
            <td>
              <button class="del" type="button" @click="dellete(item)">✘</button>
            </td>
          </tr>
          <tr>
            <th colspan="4" class="price">Total: {{$store.state.totalSum}} ₽</th>
          </tr>
        </table>
        <button class="button" type="button" @click="clearOrder">Clear order</button>


      </div>
      <div v-else class="noitems">
        <img src="../assets/order.svg" height="200">
        <router-link to="/">
          <button type="button" class="btn btn-warning">Home</button>
        </router-link>
      </div>

    </div>
  </template>

  <script>
    import {mapMutations} from 'vuex';
    export default {
      name: "Order",

      methods: {
        less(item){
          this.$store.commit('getLess', {device: item});
        },
        more(item){
          this.$store.commit('getMore', {device: item});
        },
        dellete(item){
          this.$store.commit('removeFromOrder', {device: item});
        },
        ...mapMutations(['clearOrder'])


      }
    }
  </script>

  <style scoped>

    .order {
      text-align: center;
    }

    .table {
      width: 800px;
      max-width: 100%;
      border: solid black 1px;
      margin: auto;
      background-color:rgba(255, 165, 0, 0.05);
    }

    .price {
      text-align: center;
    }

    .button {
      width: 800px;
      max-width: 100%;
      margin-bottom: 100px;
    }

    .title {
      color: orangered;
      text-decoration: none;
      text-transform:uppercase;
    }

    .del {
      color: red;
      border: none;
    }

    .noitems {
      margin-top: 10%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: center;
    }

    table {
      /*border-spacing:10px;*/
      counter-reset:numrows;
    }

    td#item::before{
      counter-increment:numrows;
      content:counter(numrows);

    }

    img {
      max-width: 100%;
    }

    @media screen and (max-width: 600px) {
      .order {
        width: 100%;
      }

    }
  </style>
