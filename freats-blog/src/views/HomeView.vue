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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/1/23</div>
          <div class="date metadata-text">2 Minute Read</div>
        </div>
        <img src="../../public/wingstop.png" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">Review: Wingstop</h1>
        <h1 class="preview-content">
          Wingstop is probably one of the most hyped restaurants on social media in the past few
          months. So, during the first week back from winter break, my spare group decided to have
          one extra-long spare and drive downtown to try it. Was it good? Yes. Is it overhyped?
          Also, yes.
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
      this.$router.push('/posts/65b1e7cb279b11b5f4a9ee8a')
    }
  }
}
</script>
