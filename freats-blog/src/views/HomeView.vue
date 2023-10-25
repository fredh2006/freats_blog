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
          <div class="metadata metadata-text">Fred He&nbsp; 2023/10/24</div>
          <div class="date metadata-text">3 Minute Read</div>
        </div>
        <img src="../../public/pho.jpg" class="preview-image" />
      </div>
      <div class="container right column" id="home-text">
        <h1 class="preview-title">Review: Pho Anh Vu</h1>
        <h1 class="preview-content">
          Now, I really wanted my first actual article to be about dumplings, but I had a delectable
          meal over the weekend and thought that it would only be fitting to share and review it. On
          Friday, October 20th, some buddies and I ventured over to Pho Anh Vu to get some, well,
          you guessed it. Pho! Pho, pronounced like “fuck” when you see a teacher walk by (because
          you know, you stop halfway), and not pronounced like “fo” in “fo sho.”
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
      console.log('hello')
      this.$router.push('/posts/653868cea441238a7fc3055b')
    }
  }
}
</script>
