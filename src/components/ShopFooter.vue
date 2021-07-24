<template>
  <footer>
    <div class="contacts">
      <div>
      <b>
        Contacts:
      </b>
      </div>
      <div class="tel">
        <img src="https://img.icons8.com/office/80/000000/phone.png"/>
      <a href="tel: +7 (905) 111-22-33">+7 (905) 111-22-33</a>
      </div>
      <div class="email">
        <img src="https://img.icons8.com/office/80/000000/new-post.png"/>
        <a href="mailto:on-shop@online.shop">on-shop@online.shop</a>
      </div>
    </div>
    <hr style="width: 100%; margin-top: 0; margin-bottom: 0;">
    <div class="info">
      &copy; {{new Date().getFullYear()}}, Gerasimov Nikolay
    </div>
  </footer>
</template>

<script>
export default {
  name: "ShopFooter"
}
</script>

<style scoped>

footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: dimgrey;
  color: white;
}

img {
  width: 30px;
  max-width: 100%;
}

.contacts {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
}

.contacts > div {
  margin-left: 20px;
  margin-right: 20px;
}
a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: orange;
}

@media screen and (max-width: 600px) {
  footer {
    position: relative;
  }

  .contacts {
    flex-direction: column;
  }
}
</style>