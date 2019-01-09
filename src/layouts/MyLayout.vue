<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="headerStyle">

      <q-toolbar class="headerStyle" color="mainMenu">
            <!--
              Toggles QLayout left side
              (Assuming the Drawer has a model bound to "leftSide")
            -->
            <q-btn
              flat round dense
              icon="menu"
              @click="leftDrawerOpen = !leftDrawerOpen"
            />

            <q-toolbar-title class="text-center">
              HOME
            </q-toolbar-title>


            <q-btn flat round dense icon="settings" />
          </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-8' : null"
      class="forceDrawer"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header class="forcedMeLess" style="color:white;">Medgar Evers College, CUNY</q-list-header>
        <div class="relative-position forcedMe">
          <img class="avatar "src="statics/images/obama.jpg" alt="">
          <q-chip class="messy"floating color="">1</q-chip>
        </div>
        <div class="forceMe">
          <div class="q-headline">
            Dr. Rudy Crew
          </div>

          <div class="colorMe">
            CLASS OF YYYY{{YEAR}}
          </div>

          <div class="" style="margin-bottom:5vh;">
            rcrew@mec.cuny.edu
          </div>
        </div>

        <q-item class="forcedMeLess" @click.native="openURL('/mainMenu')">
          <div class="q-subheading" >
            M - Media
          </div>
        </q-item>
          <q-item-separator inset dark />
          <q-item class="forcedMeLess" >
            <div class="q-subheading" >
              E - Emergency
            </div>
          </q-item>
          <q-item-separator inset dark />
          <q-item class="forcedMeLess" >
            <div class="q-subheading" >
              D - Desitination
            </div>
          </q-item>
          <q-item-separator inset dark />
          <q-item class="forcedMeLess" >
            <div class="q-subheading" >
              G - Gallery
            </div>
          </q-item>
          <q-item-separator inset dark />
          <q-item class="forcedMeLess" >
            <div class="q-subheading" >
              A - Activities
            </div>
          </q-item>
          <q-item-separator inset dark />
          <q-item class="forcedMeLess" >
            <div class="q-subheading" >
              R - Resources
            </div>
          </q-item>
          <q-item-separator inset dark />
          <q-btn @click="$router.push('/')">
          <q-item class="forcedMeLess">
            <div class="q-subheading" >
              Log out
            </div>
          </q-item>
        </q-btn>
      </q-list>

      <img class="meccyLogo"src="statics/images/mec_logo.png" alt="">
    </q-layout-drawer>

    <q-layout-footer v-model="footer">
      <div class="footerIguess">
        <div class="row justify-around">
          <div class="backgroundFooterIcon text-center">
            <img class="footerIcon" src="statics/images/icons/55238.png" alt="">
            <p class="q-caption">My schedule</p>
          </div>
          <div class="backgroundFooterIcon text-center">
            <img class="footerIcon" src="statics/images/icons/humans.png" alt="">
            <p class="q-caption">Directory</p>
          </div>
          <div class="backgroundFooterIcon text-black text-center">
            <img class="footerIcon" src="statics/images/icons/Bulletin_board_2.png" alt="">
            <p class="q-caption">Notifications</p>
          </div>
        </div>
      </div>
  <!-- footer content -->
</q-layout-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}

</script>

<style>
.messy.q-chip-floating{
  top:auto !important;
  right:auto !important;
  bottom: 0;
  left: 7vh;
  border-radius: 100%;
}

.avatarPush{
  margin-left: 2vh;
}

img.avatar{
  width: 75px !important;
  height: 75px !important;
}

.q-chip-dense {
    min-height: 1px;
    padding:5px 8px;
    font-size: 12px;
    background-color:#393939;
    color: #FFD700;
    border: 1px solid white;
  }

  .forceDrawer{
    color: white;
  }

  .colorMe{
    color: #FFD700 !important;
  }

.forceMe{
  margin-left: 5vh;
  margin-top: 2vh;
}

.forcedMe{
  margin-left: 5vh;
}
.forcedMeLess{
  margin-left: 3vh;
}

.q-item-separator-inset-component {
margin: 0 120px 0px 40px;
opacity: 0.2;
}

.meccyLogo{
  margin-top:5vh;
  height: 12vh;
  width: auto;
  margin-left:5vh;
}

.footerIguess{
  background-color:#E4E4E4;
  width: auto;
  height: 65px;
}

.backgroundFooterIcon{
color: black !important;
}
.footerIcon{
  height: 30px;
  width: auto;
  margin:5px;
}
.headerStyle{
background-color: #646464;
-webkit-box-shadow:none;
box-shadow: none;
}

.menuMargin{
  margin: 20px;
  margin-left:50px;
}

</style>
