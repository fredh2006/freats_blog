<script setup>
import TheNavigation from '../components/TheNavigation.vue'
import TheHighlightBanner from '../components/TheHighlightBanner.vue'
</script>

<template>
  <div class="home-container">
    <TheNavigation />
    <!-- <TheHighlightBanner/> -->
    <div class="main-container columns">
      <div class="container left column">
        <h1 class="latest">Latest</h1>
        <div class="metadata-container">
          <div class="metadata metadata-text">Fred He&nbsp; 2023/11/12</div>
          <div class="date metadata-text">3 Minute Read</div>
        </div>
        <img src="../../public/msg.jpg" class="preview-image" @click="click"/>
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">WTF is MSG?</h1>
        <h1 class="preview-content">
          Ok, I know this article isn’t about bubble tea, but you definitely won’t regret reading it. You might have heard of MSG before, tossed around in sentences like “just put some MSG in and it’ll taste better” and “MSG is a god's gift,” but there’s a likely chance you don’t really know what it is. Not to worry, because I didn’t really know what it was either until I chose to write this article on it. 
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
      this.$router.push('/posts/65516de1a441238a7fc3197a')
    }
  }
}
</script>
