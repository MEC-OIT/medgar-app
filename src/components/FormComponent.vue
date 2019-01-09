<template>
  <div class="">
    <div class="moveMe text-red" v-if="$v.form.$error">
      Form is Incorrect
    </div>

    <form @submit.prevent="submit" novalidate>
      <div class="flex">
        <div class="">
           <name-component v-model="form.name" :v="$v.form.name"/>
        </div>
        <div class="">
          <email-component v-model="form.email" :v="$v.form.email" />
        </div>
      </div>
      <div class="text-center">

        <q-btn
          color="primary"
          size="xl"
          label="LOGIN"
          class=" spaceForce "
          rounded
          type="submit"
          style="width:227.5px;"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { isNameJoe, isEmailAvailable } from "components/validator.js";
import NameComponent from "components/NameComponent.vue";
import EmailComponent from "components/EmailComponent.vue";



export default {
  name: "FormComponent",

  components: { NameComponent, EmailComponent },

  data() {
    return {
      form: {
        name: "",
        email: ""
      }
    };
  },

  validations: {
    form: {
      name: { required, isJoe: isNameJoe },
      email: { required, email: isEmailAvailable }
    }
  },

  methods: {
    submit() {
      this.$v.form.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$error) return;
      // to form submit after this
      alert("Login Successful Welcome: Dr. Crew");
      this.$router.push("/mainMenu");

    }
  }
};
</script>

<style media="screen">
.spaceForce2{

}

.spaceForce{

}

.moveMe{

}
</style>
