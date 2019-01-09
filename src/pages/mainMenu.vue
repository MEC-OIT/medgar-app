<template>
  <q-page padding class="mainMenuScreen">
    <div class="q-subheading q-my-sm forceMed">
      Welcome: Dr. Rudy Crew
    </div>

      <div class="row justify-around text-center">

        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/bus.png"
          alt="">
          <p class="stoped text-white">Bus Tracker</p>
          </q-btn>
        </div>

        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Directory_4.png"
          alt="">
          <p class="stoped text-white">Directory</p>
          </q-btn>
        </div>
        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Athlete.png"
          alt="">
          <p class="stoped text-white">Athletics</p>
          </q-btn>
        </div>
        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Bulletin_board.png"
          alt="">
          <p class="stoped text-white">Blackboard</p>
          </q-btn>
        </div>
      </div>
      <div class="row justify-around text-center">

        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Course-assign-filled.png"
          alt="">
          <p class="stoped text-white">Courses</p>
          </q-btn>
        </div>

        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/55238.png"
          alt="">
          <p class="stoped text-white">Events</p>
          </q-btn>
        </div>
        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/library.png"
          alt="">
          <p class="stoped text-white">Library</p>
          </q-btn>
        </div>
        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Cafe_3.png"
          alt="">
          <p class="stoped text-white">Menus</p>
          </q-btn>
        </div>
      </div>
      <div class="row justify-around text-center">

        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Bulletin_board_3.png"
          alt="">
          <p class="stoped text-white">Bulletins</p>
          </q-btn>
        </div>

        <div class="col-3">
          <q-btn @click="$router.push('/videoTwo')" class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Play_Button_3.png"
          alt="">
          <p class="stoped text-white">Video</p>
          </q-btn>
        </div>
        <div class="col-3">
          <q-btn @click="$router.push('/videoPod')" class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Podcast_2.png"
          alt="">
          <p class="stoped text-white">Podcast</p>
          </q-btn>
        </div>
        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/Podcast_2.png"
          alt="">
          <p class="stoped text-white">Radio</p>
          </q-btn>
        </div>
      </div>
      <div class="row justify-around text-center">

        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/calendar.png"
          alt="">
          <p class="stoped text-white">Calander</p>
          </q-btn>
        </div>

        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/humans.png"
          alt="">
          <p class="stoped text-white">Clubs</p>
          </q-btn>
        </div>
        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/grad_hat.png"
          alt="">
          <p class="stoped text-white">Alumni</p>
          </q-btn>
        </div>
        <div class="col-3">
          <q-btn class="stop">
          <img
          class="menu-box-image-style"
          src="statics/images/icons/donate_3.png"
          alt="">
          <p class="stoped text-white">Donate</p>
          </q-btn>
        </div>
      </div>
      <div class="text-center">
        <img class="mecLogod" src="statics/images/mec_logo.png" alt="">

      </div>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
.menu-box-image-style{
  height: 65px;
  width: 65px;
  background-color: white;
  border-radius: 3px;
  padding:12px;
  margin:0px;
}

.mainMenuScreen{
background: url('/statics/images/app_home_background.png') no-repeat;
height: 100%;
width: 100%;
background-size: cover;
background-position: center;
}

p.q-caption{
margin-top: 5px;

}

.mecLogod{
  width: auto;
  height: 15vh;
}
.forceMed{
  margin-left:20px;
  color: white;
  margin-bottom:20px;
}

q-btn.stop{
  padding: 0;
}

.stop{
padding: 0;
-webkit-box-shadow: none;
box-shadow: none;
font-size: 13px;
font-weight: normal;
margin-top:5px;
}
.stoped{
  margin-top:5px;
}
</style>
