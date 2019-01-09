<template>
  <q-page padding class="loginScreen">



    <div class="window-height row justify-center items-center ">
      <img
            id=""
            class="mec_logo moreCenter2"
            src="statics/images/mec_logo.png"
            alt="">



<form-component />





    <q-btn
      color="primary"
      size="md"
      label="CREATE AN ACCOUNT"
      class="spaceForce2 "
      flat
      @click
    />

    <p></p>

    </div>
    <!-- content -->

  </q-page>


</template>

<script>
  import FormComponent from "components/FormComponent.vue";
export default {

  // name: 'PageName',
  name: "App",
  components: {
    FormComponent
  }
};

</script>

<style>
.loginScreen{
background: url('/statics/images/mec_library.jpg') no-repeat;
height: 100%;
width: 100%;
background-size: cover;
background-position: center;
}
.mec_logo{
  height: 15vh;
  width: 25vh;
}
.formBackground{
  background-color: rgba(0, 0, 0, 0.5);
  padding:20px;
  color: white;
  width: 100vw;
}

.spaceForce2{
  margin-top:-15vh;
}



</style>
