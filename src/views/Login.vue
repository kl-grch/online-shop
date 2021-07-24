<template>
  <vee-form :validation-schema="rules" @submit="sendData" class="mx-auto form">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <vee-field name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@email.com"/>
        <vee-error name="email" class="err"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <vee-field name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="12345678"/>
      <vee-error name="password" class="err"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <div class="buttons">
    <button type="submit" class="btn btn-primary submit">Submit</button>
      <router-link to="/registration">
    <button type="button" class="btn btn-light">Registration</button>
      </router-link>
    </div>
  </vee-form>
</template>

<script>
import {Form, Field, ErrorMessage, configure} from 'vee-validate';
import * as yup from 'yup';
import {mapGetters} from "vuex";

configure({
  validateOnInput: true
});

export default {
  name: "Login",
  components: {
    VeeForm: Form, // границы форм
    VeeField: Field, // поле формы, по умолчанию input
    VeeError: ErrorMessage, // элемент html для вывода ошибок
  },
  data (){
    return {
      rules: yup.object({
        email: yup.string().trim().required('Enter email').email('Login must be in the format admin@mail.com'),
        password: yup.string().required('Enter password').min(8, 'Minimum number of characters 8').typeError('Password must be numbers'),

      })
    }
  },
  methods: {
    sendData(values){
      for(let user of this.getUsers){
        if(values.email === user.email && values.password === user.password){ // ||
          console.log(values);
          alert(`Hello, ${values.email}`);
          document.location.href = '/';
        }else{
          alert('Authorisation Error');
        }
      }
    }
  },
  computed: {
    ...mapGetters(['getUsers']),
  }
}
</script>

<style scoped>

.buttons {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
}

.err {
  color: red;
}

.form {
  border: 1px black solid;
  padding: 10%;
  background-color: rgba(255, 165, 0, 0.05);
  width: 50%;
  margin-bottom: 10%

}

@media screen and (max-width: 600px) {

  .form {
    width: 90%;
  }
}

</style>