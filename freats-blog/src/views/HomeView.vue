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
          <div class="date metadata-text">5 Minute Read</div>
        </div>
        <img src="../../public/eggs.jpg" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">100 Ways to Cook an Egg</h1>
        <h1 class="preview-content">
          Commonly associated with chefs in combination with a white coat is a tall, white hat. This
          pleated hat is officially referred to as a toque, the Arabic word for hat. If you look
          closely, or at all, at a chef’s hat, you’ll notice numerous folds and pleats in it. In the
          early days of the toque, people said that the number of pleats represented the number of
          techniques a chef had achieved. Often, there were 100 pleats, which indicates the more
          than a hundred ways of cooking an egg.
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
      this.$router.push('/posts/65714f598781241967c452ef')
    }
  }
}
</script>
