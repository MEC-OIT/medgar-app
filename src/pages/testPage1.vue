<template>
  <q-page padding class="row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <p class="caption">Scroll down to see it in action.</p>

      <br>
      <q-infinite-scroll :handler="refresher">
        <p v-for="(item, index) in items" :key="index" class="caption">
          <q-chip square color="secondary" class="shadow-1">
            {{ index + 1 }}
          </q-chip>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

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

        </p>

        <div class="row justify-center" style="margin-bottom: 50px;">
          <q-spinner-dots slot="message" :size="40" />
        </div>
      </q-infinite-scroll>


    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      items: [{}, {}, {}, {}, {}]
    }
  },
  methods: {
    refresher (index, done) {
      setTimeout(() => {
        let items = []
        for (let i = 0; i < 7; i++) {
          items.push({})
        }
        this.items = this.items.concat(items)
        done()
      }, 2500)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
