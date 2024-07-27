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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/7/26</div>
          <div class="date metadata-text">5 Minute Read</div>
        </div>
        <img src="../../public/korea.jpg" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">Review: Korea</h1>
        <h1 class="preview-content">
          I know. I know. Much to everyone’s dismay, there hasn’t been a FREATS post in a quite a
          while. With school over and summer well underway, I haven’t touched a task that’s required
          brainpower – so much so that I even escaped abroad for 2 weeks. I spent these past 2 weeks
          exploring the streets of Korea and Japan, soaking in sites and devouring some dishes. Both
          these countries are so culturally and historically rich, with beautiful palaces, sprawling
          nature, and bustling streets; but obviously, I’m here to discuss food.
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
      this.$router.push('/posts/66a45ba85fa517ce0a39a158')
    }
  }
}
</script>
