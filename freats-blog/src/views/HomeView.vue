<script setup>
import TheNavigation from '../components/TheNavigation.vue'
import TheHighlightBanner from '../components/TheHighlightBanner.vue';
</script>

<template>
  <div class="home-container">
    <TheNavigation />
    <!-- <TheHighlightBanner/> -->
    <div class="main-container columns">
      <div class="container left column">
        <h1 class="latest">Latest</h1>
        <div class="metadata-container">
          <div class="metadata metadata-text">Fred He&nbsp; 2023/10/19</div>
          <div class="date metadata-text">8 Minute Read</div>
        </div>
        <img src="../../public/pilot.jpg" class="preview-image" />
      </div>
      <div class="container right column" id = "home-text">
        <h1 class="preview-title">Pilot</h1>
        <h1 class="preview-content">
          Do you know how all the Netflix shows you watch usually have their first episode titled
          “Pilot”? I thought it was pretty cool until I realized it acted as an episode to evaluate
          the show’s potential for success. Now, I wonder about all the pilot episodes I’ve never
          seen. Anyway, I titled this post “Pilot” to mark the beginning of FREATS and have
          something cool to look back on. TBH, I don’t need a pilot article, but I believe it would
          be helpful to detail and outline everything I’ve planned. I know you guys are reading for
          food content, so I’ll keep this short and sweet.
        </h1>
        <div class="button-container">
          <button class="button read-more" @click="click">Read More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      console.log('hello')
      this.$router.push('/posts/65371d0ca441238a7fc303f4')
    }
  }
}
</script>
