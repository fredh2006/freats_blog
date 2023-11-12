<template>
  <div class="home-container">
    <nav class="navbar navbar-1">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <h2 class="navbar-logo">FREATS</h2>
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item right-item">
          <router-link class="navbar-right" to="/about">ABOUT</router-link>
        </div>
        <div class="navbar-item right-item">
          <router-link class="navbar-right" to="/posts">POSTS</router-link>
        </div>
        <div class="navbar-item right-item">
          <router-link class="navbar-right" to="/home">HOME</router-link>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-2">
      <div class="nav-container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <h2 class="navbar-logo">FREATS</h2>
          </router-link>
        </div>
        <input class="checkbox" type="checkbox" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="navbar-end menu-items">
          <div class="navbar-item right-item">
            <router-link class="navbar-right" to="/about">ABOUT</router-link>
          </div>
          <div class="navbar-item right-item">
            <router-link class="navbar-right" to="/posts">POSTS</router-link>
          </div>
          <div class="navbar-item right-item">
            <router-link class="navbar-right" to="/home">HOME</router-link>
          </div>
        </div>
      </div>
    </nav>

    <div class="test-container">
      <div class="main-container">
        <div class="container single-container">
          <div class="image-container">
            <img id="single-image" class="single-image" src="" alt="" />
          </div>
          <div id="blog-container">
            <h1 class="single-title">{{ this.post.title }}</h1>
            <div class="single-author">{{ this.post.author }} &nbsp; {{ this.date }}</div>
            <div class="single-time">{{ this.post.time }} Minute Read</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      post: [],
      placeholder: '',
      slashDate: '',
      date: '',
      content: '',
      images: []
    }
  },
  methods: {
    fetchPost() {
      axios
        .get(`https://freats-api-59bw.onrender.com/api/posts/${this.$route.params.id}`)
        .then((response) => {
          this.post = response.data
          this.arrayImages(this.post.images)
          this.placeholder = this.post.date.substring(0, 10)
          this.slashDate = this.placeholder.replace('-', '/')
          this.date = this.slashDate.replace('-', '/')
          this.addLineBreak(this.post.content)
        })
    },

    /**
     * turns a string of images into an array of them
     * @param {string} images string of all images attached to post
     */
    arrayImages(images) {
      const previewImage = document.getElementById('single-image') //creates and sets the preview image
      previewImage.src = this.post.prevImage

      let index = images.indexOf(',')
      let prevIndex
      let i = 0

      //seperates the images by commas and pushes them to the images array
      while (index >= 0) {
        if (i == 0) {
          prevIndex = 0
        }
        let image = ''
        if (i == 0) {
          image = images.substring(prevIndex, index)
        } else {
          image = images.substring(prevIndex + 2, index)
        }
        prevIndex = index
        index = images.indexOf(',', index + 1)
        this.images.push(image)
        i++
      }
    },

    /**
     * adds a line break and image after every paragraph
     * @param {string} content content of blog post
     */
    addLineBreak(content) {
      console.log(this.images)
      const blog = document.getElementById('blog-container')
      const paraContent = document.createElement('div')
      paraContent.classList.add('single-content')

      let index = content.indexOf('2006')
      let prevIndex
      let i = 0
      let c = 0

      //cycles through each paragraph
      while (index >= 0) {
        if (i == 0) {
          prevIndex = 0
        }
        console.log(prevIndex)
        let text = ''
        if (i == 0) {
          text = content.substring(prevIndex, index) + '\r\n'
        } else {
          text = content.substring(prevIndex + 4, index) + '\r\n'
        }
        prevIndex = index
        index = content.indexOf('2006', index + 1)

        const p = document.createElement('p')
        const t = document.createTextNode(text)
        const b = document.createElement('br')
        p.appendChild(t)
        paraContent.appendChild(p)
        paraContent.appendChild(b)

        //cycles through each image
        if (!(c >= this.images.length)) {
          if (this.images.length >= 1) {
            const imageContainer = document.createElement('div')
            imageContainer.classList.add('singlepost-image-container')
            const cardImage = document.createElement('div')
            cardImage.classList.add('card-image')
            cardImage.classList.add('singlepost-image')

            if (this.images[i] == 'none') {
              console.log("hello")
            } else {
              let img = new Image()
              img.src = this.images[i]  
              img.classList.add('preview-image')
              cardImage.appendChild(img)
              imageContainer.appendChild(cardImage)
              paraContent.appendChild(imageContainer)
            }
            c++
          }
        }
        i++
      }
      blog.appendChild(paraContent)
    }
  },
  beforeMount() {
    this.fetchPost()
  }
}
</script>
