<template>
  <q-page padding class="windowPls">
    <!-- content -->
    <div class="q-headline">
      <h1 class="q-headline q-mx-nd">PODCASTS</h1>
    </div>
<div class="q-my-sm q-mx-sm ">

</div>
    <q-card inline class="q-ma-sm windowPls">
          <q-card-main>
            <q-card-media>
              <div class="">
                  President Dr. Rudy Crew meets with Former President of South Africa Kgalema Motlanthe
              </div>
              <img src="statics/images/mec_logo.png" height=""width="">
            </q-card-media>
            <q-card-title>

              <q-rating slot="subtitle" v-model="stars" :max="5" />
              <div slot="right" class="row items-center">
                <q-icon name="headset_mic" /> 200 Listens
              </div>
            </q-card-title>
            <audio controls>
              <source src="http://www1.cuny.edu/portal_ur/news/radio/podcast/SOUTHAFRICANPRESIDENTAUDIOPODCAST.mp3" type="audio/ogg">
              <source src="http://www1.cuny.edu/portal_ur/news/radio/podcast/SOUTHAFRICANPRESIDENTAUDIOPODCAST.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
          </q-card-main>
    </q-card>

    <q-btn
     @click="$router.push('/mainMenu')"
      color="primary"
      size="md"
      label="Back"
      icon="arrow_back"
      class="q-px-lg"
    />

</q-page>
</template>
<script type="text/javascript">

</script>


<style>
.q-btn.q-px-lg{
  width:100px;
}

.windowPls {
    max-width: 90vh !important;
  }

audio{
    max-width: 45vh !important;
  }
</style>
