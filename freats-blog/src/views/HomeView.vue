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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/10/4</div>
          <div class="date metadata-text">3 Minute Read</div>
        </div>
        <img src="../../public/uoft.jpeg" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">Dishes that Remind me of Home</h1>
        <h1 class="preview-content">
          Wow. It feels like I haven’t written an article in the longest time, which is partially
          true. Ever since I got back from my East-Asian country crawl (only 2 countries lol!), I
          went to explore the stunning scenery of Banff and pack my bags for university. As a
          freshman in university, the transition from high school to university isn’t simple at all.
          There’s such a drastic difference whether it’d be socially or academically, but I’ve begun
          to ease into a routine I enjoy. Although I go to university close to home and have the
          blessing of going back every week, I still feel homesick and crave the warmth of the
          dinner table at home. For any university student reading and experiencing this, I’ve found
          that one of the best things you can do is eat food that reminds you of home.
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
      this.$router.push('/posts/670066f1c021bc454142a07b')
    }
  }
}
</script>
