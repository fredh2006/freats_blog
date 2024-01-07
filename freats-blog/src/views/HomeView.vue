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
          <div class="metadata metadata-text">Fred He&nbsp; 2023/1/06</div>
          <div class="date metadata-text">3 Minute Read</div>
        </div>
        <img src="../../public/michelin.jpg" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">A Guide to the Michelin Guide </h1>
        <h1 class="preview-content">
          No, this article isn’t about that big, white, bubbly, and lowkey creepy Michelin man
          (sorry, not sorry). Instead, it’s about something else with an odd relationship to this
          French tire company. The Michelin stars. The widely renowned and recognized term Michelin
          stars is actually part of the Michelin Guides, a series of guidebooks that Michelin has
          published and consistently updated since 1900.
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
      this.$router.push('/posts/6599fb56279b11b5f4a9dbc6')
    }
  }
}
</script>
