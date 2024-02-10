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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/2/8</div>
          <div class="date metadata-text">3 Minute Read</div>
        </div>
        <img src="../../public/fries.png" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">The Science Behind Fast Food Fries</h1>
        <h1 class="preview-content">
          Why the **** does McDonalds have 19 ingredients in their fries? That was my initial
          thought when I first learned about it in my very productive, enjoyable Kinesiology class.
          The idea that French fries could contain more than 2 ingredients appalled me, and I
          researched it further to find any justification for my love for McDonald’s fries. What I
          found out was honestly quite interesting.
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
      this.$router.push('/posts/65c6d3bc3b99dcd2159b49f3')
    }
  }
}
</script>
