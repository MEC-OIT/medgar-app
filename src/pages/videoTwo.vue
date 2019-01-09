<template>
  <q-page>
    <!-- content -->
    <div class="relative-position forcedMe text-center">
      <img class="avatar2 "src="statics/images/obama.jpg" alt="">
      <q-chip class="messy2"floating color="">0</q-chip>

    </div>
    <div class="text-center">
      <div class="q-headline" style="margin-top:15px;">
          Dr. Rudy Crew
      </div>
      <div class="" style="margin-bottom:20px;">
        Class of YYYY {{Year}}
      </div>
    </div>

   <div style="background-color:#F6F6F9;">

     <q-tabs animated swipeable inverted color="secondary" align="justify" >

       <q-tab default name="ALL" slot="title" icon="" label="All Videos" />
       <q-tab  name="favorite" slot="title" icon="" label="Favorite" />


       <q-tab-pane class="text-center"name="favorite">None To Show</q-tab-pane>
       <q-tab-pane name="ALL">

         <div class="row justify-around" style="background-color:#F6F6F9;">
            <div class="col-6">

              <q-card inline class="q-ma-sm">
                <q-card-media>
                  <img class=""src="statics/images/img1c.png">
                </q-card-media>
                <q-card-title>
                  Courgars...
                <q-rating size='12px' v-model="stars" :max="5"  />
              </q-card-title>
            </q-card>

            <q-card inline class="q-ma-sm">
              <q-card-media>
                <img class="image-size-1"src="statics/images/img3w.png">
              </q-card-media>
              <q-card-title>
                Writers on...
              <q-rating size='12px' v-model="stars" :max="5"  />
            </q-card-title>
          </q-card>

          <q-card inline class="q-ma-sm">
            <q-card-media>
              <img class="image-size-1"src="statics/images/img4j.png">
            </q-card-media>
            <q-card-title>
              Jazzy jazz..
            <q-rating size='12px' v-model="stars" :max="5"  />
          </q-card-title>
        </q-card>
            </div>

            <div class="col-6">

              <q-card inline class="q-ma-sm">
                <q-card-media>
                  <img class=""src="statics/images/img2c.png">
                </q-card-media>
                <q-card-title>
                  Courgas...
                <q-rating size='12px' v-model="stars" :max="5"  />
              </q-card-title>
            </q-card>

            <q-card inline class="q-ma-sm">
              <q-card-media>
                <img class=""src="statics/images/img5d.png">
              </q-card-media>
              <q-card-title>
                Dr. Rudy Crew...
              <q-rating size='12px' v-model="stars" :max="5"  />
            </q-card-title>
          </q-card>

          <q-card inline class="q-ma-sm">
            <q-card-media>
              <img class=""src="statics/images/img1c.png">
            </q-card-media>
            <q-card-title>
              Courgas...
            <q-rating size='12px' v-model="stars" :max="5"  />
          </q-card-title>
        </q-card>

            </div>
         </div>
         <q-btn
           color="tertiary"
           size="xl"
           label="Load More"
           class="full-width fiddleButton"
           rounded
           @click="$router.push('/mainMenu')"
         />
       </q-tab-pane>
     </q-tabs>

   </div>


 </q-page>
</template>


<script>
export default {
  // name: 'PageName',
   data () {
     return {
       tab: 'favorite',
       stars: 3,
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     }
   }
  }

</script>

<style>
.docs-tab-pane.q-tab-pane{
   display: flex;
   align-items: center;
   justify-content: center;
   height: 65px;
 }

.avatar2{
  margin-left:-40px;
}
.q-chip-dense.messy2{
    min-height: 1px;
    padding:10px 15px;
    font-size: 12px;
    background-color:#393939;
    color: #FFD700;
    border: 1px solid white;
  }

  .messy2.q-chip-floating{
    top:auto !important;
    right:auto !important;
    bottom: 0;
    left:175px;
    border-radius: 100%;
  }

  .{
    width: auto;
    height: 150px;
  }

  .image-size-2{

  }

  .q-btn.fiddleButton{
    margin-top:15px;
    margin-bottom:15px;
    color:#FFCD07 !important;
  }
</style>
