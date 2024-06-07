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
          <div class="metadata metadata-text">Fred He&nbsp; 2024/6/7</div>
          <div class="date metadata-text">2 Minute Read</div>
        </div>
        <img src="../../public/crust.png" class="preview-image" @click="click" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">What the Crust</h1>
        <h1 class="preview-content">
          Thick. Thin. Deep-Dish. Stuffed? No, I’m not talking about women. I’m talking about pizza!
          While I’m far from what many would call a pizza connoisseur, I definitely do enjoy a slice
          from time to time. Now, everyone knows that pizzas have a near-unlimited amount of
          customization, whether it’s the variety of toppings, the crust, or even the way it’s cut.
          The crust, in my opinion, is the most integral part of the pizza. Its role as the
          foundation is essential to the success and tastiness of the slice. Everyone has different
          opinions when it comes to pizza crusts, but I’m not here to argue for one crust in
          particular (thin crust ftw). I’m here to enjoy and appreciate all the different types of
          crust.
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
      this.$router.push('/posts/66636d28cc9f811148dcfe62')
    }
  }
}
</script>
