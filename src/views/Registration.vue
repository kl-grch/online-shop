<template>
  <form @submit="sendData">
    <div class="row">
      <div class="col">
        <label for="exampleInputEmail1" class="form-label">First Name *</label>
        <input required type="text" class="form-control" placeholder="First name" aria-label="First name">
      </div>
      <div class="col">
        <label for="exampleInputEmail1" class="form-label">Last Name *</label>
        <input required type="text" class="form-control" placeholder="Last name" aria-label="Last name">
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address *</label>
      <input required type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password *</label>
      <input required type="password" placeholder="Password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword2" class="form-label">Repeat password *</label>
      <input required type="password" placeholder="Password" class="form-control" id="exampleInputPassword2">
    </div>

    <div class="input-group mb-3">
      <input placeholder="Add" type="file" class="form-control" id="inputGroupFile02">
      <label class="input-group-text" for="inputGroupFile02">Upload</label>
    </div>


    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Registration.vue",
  methods: {
    sendData(values){
      console.log(values);
    }
  }
}
</script>

<style scoped>
form {
  border: 1px black solid;
  padding: 1%;
  background-color: rgba(255, 165, 0, 0.05);
}

@media screen and (max-width: 600px) {
  form {
    width: 100%;
  }
}

</style>