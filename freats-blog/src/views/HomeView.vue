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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/5/6</div>
          <div class="date metadata-text">1 Minute Read</div>
        </div>
        <img src="../../public/sumaq.png" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">Review: Sumaq</h1>
        <h1 class="preview-content">
          Shawarmas have always been a staple of street food. Smoky, tender, juicy meat right off a
          spit over a pile of rice or in a pita, drizzled in garlic sauce and more. I fondly
          remember the first time I had shawarma was in France, when my family was in our hotel
          wondering what to eat for dinner. Instead of enjoying the fine dining that France is known
          for, we decided to indulge ourselves in the little food cart right across the street,
          which I swear, served the best shawarma I’ve had to date. Now, Keith Lee came to Toronto
          around a month ago and rated this shawarma place, Sumaq, very highly. I got it. Let’s try
          it and rate it 1 through 10.
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
      this.$router.push('/posts/66397e9bcf71c810c931f533')
    }
  }
}
</script>
