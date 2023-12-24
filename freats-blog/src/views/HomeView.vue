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
          <div class="metadata metadata-text">Fred He&nbsp; 2023/12/06</div>
          <div class="date metadata-text">2 Minute Read</div>
        </div>
        <img src="../../public/letter.png" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">A Love Letter to Chipotle</h1>
        <h1 class="preview-content">
          I love Chipotle. I mean that from the very bottom of my heart. This love, however, isn’t
          superficial; it truly stems from the bottom of my heart. Through difficult times, I eat
          Chipotle. Through joyful times, I eat Chipotle. Through confusing times, I eat Chipotle. I
          sincerely love eating Chipotle. Now, this may seem like a one-sided relationship with
          Chipotle not reciprocating back, but I see it differently when Chipotle hands me a bowl
          piled high with food
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
      this.$router.push('/posts/6587911128276bee86975b85')
    }
  }
}
</script>
