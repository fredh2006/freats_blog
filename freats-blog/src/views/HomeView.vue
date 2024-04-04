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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/4/3</div>
          <div class="date metadata-text">4 Minute Read</div>
        </div>
        <img src="../../public/amal.jpg" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">The Evolution of Street Food</h1>
        <h1 class="preview-content">
          No one told me Amal was a Michelin-recommended restaurant, so I must say, when I showed up
          in joggers and a sweater, I felt a tad bit underdressed. A clean, cozy, and sleek
          interior, along with the authentic Lebanese food, created an experience that I would
          describe as nothing less than spectacular. I visited this place only a few days ago, and
          with the flavours still lingering on my tongue, I’m here to tell you all about it.
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
      this.$router.push('/posts/660e2445638de5f577a3bbf2')
    }
  }
}
</script>
