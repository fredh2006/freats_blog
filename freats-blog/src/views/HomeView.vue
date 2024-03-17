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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/3/16</div>
          <div class="date metadata-text">2 Minute Read</div>
        </div>
        <img src="../../public/street_food.jpg" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">The Evolution of Street Food</h1>
        <h1 class="preview-content">
          Whether in the bustling alleys of Singapore, the concrete jungle of New York, or the
          vibrant streets of India, you’ll always see hawker stalls, food carts and street vendors
          throughout. Street food is a staple of any city and supports the people of the city in
          various ways. Not only does it provide a meal that’s affordable, available, and filling,
          but it also gives one the opportunity to taste the cuisine of a country from across the
          world, often in its realest form. Street food has evolved from a way to feed the working
          class into a global phenom.
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
      this.$router.push('/posts/65f6509cb772c99cb59322c5')
    }
  }
}
</script>
