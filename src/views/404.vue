<template>
  <div class="err">
  <img src="../assets/404.jpg">
  <h3>404</h3>
  <p>Page not found!</p>
  <router-link to="/">
  <button type="button" class="btn btn-warning">Home</button>
  </router-link>
  </div>

</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>

.err {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
  align-items: center;
}

img {
  width: 300px;
  max-width: 100%;
}

</style>