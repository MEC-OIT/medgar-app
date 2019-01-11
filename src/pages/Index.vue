<template>
  <q-page
  class="splashScreen">
  <q-btn @click="$router.push('/login')">


    <div class="window-height row justify-center ">

        <img class="mec-logo_splashScreen " src="statics/images/mec_logo_quick_cheat.png" alt="">


      <div class="text-white">
        <div class="pushMe">
          <div class="q-subheading text-center q-mt-xl text-weight-bold">
            Medgar Evers College, CUNY
          </div>
          <div class="q-caption text-weight-light  text-center q-mt-sm q-mb-lg">
            STUDENT LIFE AT YOUR <br>
            FINGERTIPS
          </div>
        </div>

        <div class="q-caption hello text-center q-mt-lg q-mx-lg text-weight-light">
          Just steps away from
          the Brooklyn Botanical Garden and the Brooklyn
          Museum, Medgar is in the midst of the borough’s cultural and
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
.pushMe{
margin-top:-20px;
}
.splashScreen{
background: url('/statics/images/splashScreen2.jpeg') no-repeat;
height: 100%;
width: 100%;
background-size: cover;
}

.mec-logo_splashScreen{
  border-radius: 10px;
  margin-top:175px;
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
.q-caption.hello {
  text-transform: none;
  margin-top:75px;
}

.smackMeDown{

}
</style>
