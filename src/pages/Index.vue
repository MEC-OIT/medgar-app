<template>
  <q-page
  class="splashScreen">
  <q-btn @click="$router.push('/login')">


    <div class="window-height row justify-center items-center">

        <img class="mec-logo_splashScreen " src="statics/images/mec_logo_quick_cheat.png" alt="">


      <div class="text-white">
        <div class="q-subheading text-center q-mt-xl ">
          Medgar Evers College, CUNY
        </div>
        <div class="q-body-2 text-center q-mt-md">
          STUDENT LIFE AT YOUR <br>
          FINGERTIPS
        </div>
        <div class="q-caption text-center q-mt-lg q-mx-lg">
          Our Central Brooklyn campus, just steps away from
          the Brooklyn Botanical Garden and the Brooklyn
          Museum, is in the midst of the borough’s cultural and
          economic renaissance.
        </div>
      </div>
    </div>
    <!-- content -->
</q-btn>
  </q-page>


</template>

<script>
export default {
  // name: 'PageName',
  name: 'splashScreen'
}
</script>

<style>
.splashScreen{
background: url('/statics/images/splashScreen2.jpeg') no-repeat;
height: 100%;
width: 100%;
background-size: cover;
}

.mec-logo_splashScreen{
  border-radius: 10px;
  margin-bottom:-30vh;
  height: 20vh;
  width: auto;
}
.window-height.row{
  height: 90vh !important;
}

.q-btn{
  -webkit-box-shadow: none;
   box-shadow:none;
}


</style>
