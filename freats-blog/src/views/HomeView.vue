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
          <div class="metadata metadata-text">Fred He&nbsp; 2023/11/20</div>
          <div class="date metadata-text">4 Minute Read</div>
        </div>
        <img src="../../public/raku.jpg" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">Review: Raku</h1>
        <h1 class="preview-content">
          With a stark contrast to its simple and unassuming exterior, Raku serves dishes that
          explode and burst with flavour. This duality, along with the modern and minimalistic
          interior, created a satisfying and mellow experience. On Saturday, November 18th, I made
          my way to downtown Toronto, through the TTC and crackhead-filled streets, to visit Raku, a
          restaurant serving authentic Japanese udon.
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
      this.$router.push('/posts/655c3659a441238a7fc3222f')
    }
  }
}
</script>
