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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/8/2</div>
          <div class="date metadata-text">4 Minute Read</div>
        </div>
        <img src="../../public/japan.jpg" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">Review: Japan</h1>
        <h1 class="preview-content">
          Only a short 2-hour flight from Korea, Japan was the next stop of our trip. I thought
          Korea was hot, so words won’t be able to describe what Japan was like. It’s like I was a
          big fat steak being thrown onto a searing hot cast iron and right as I thought I was
          finished; they threw me into an oven at 400 degrees. Despite being cooked alive most days,
          I got to enjoy some great cooking from Japan’s chefs as well, not just the weather.
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
      this.$router.push('/posts/66ad7fe0de845afb0cef7f9a')
    }
  }
}
</script>
