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

    <div class="main-container">
      <div class="container single-container">
        <div class="image-container">
          <img class="single-image" src="../../public/pilot.jpg" alt="" />
        </div>
        <div id="blog-container">
          <h1 class="single-title">{{ this.post.title }}</h1>
          <div class="single-author">{{ this.post.author }} &nbsp; {{ this.slashDate2 }}</div>
          <div class="single-time">{{ this.post.time }} Minute Read</div>
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
      date: '',
      slashDate1: '',
      slashDate2: '',
      content: '',
      filler: [],
      filler1: '',
      filler2: ''
    }
  },
  methods: {
    fetchPost() {
      axios.get(`https://freats-api-59bw.onrender.com/api/posts/${this.$route.params.id}`).then((response) => {
        console.log(this.$route.params.id)
        this.post = response.data
        console.log(this.post)
        this.date = this.post.date.substring(0, 10)
        this.slashDate1 = this.date.replace('-', '/')
        this.slashDate2 = this.slashDate1.replace('-', '/')
        this.addLineBreak(this.post.content)
      })
    },
    addLineBreak(content) {
      const blog = document.getElementById('blog-container')
      const paraContent = document.createElement('div')
      paraContent.classList.add('single-content')

      let index = content.indexOf('2006')
      let prevIndex
      let i = 0

      while (index >= 0) {
        if (i == 0) {
          prevIndex = 0
        }
        console.log(prevIndex)
        let text = ''
        if (i == 0) {
          text = content.substring(prevIndex, index) + "\r\n" 
        } else {
          text = content.substring(prevIndex + 4, index) + "\r\n" 
        }
        prevIndex = index
        index = content.indexOf('2006', index + 1)
        i++

        this.filler.push(text)
        console.log(text)

        const p = document.createElement('p')
        const t = document.createTextNode(text)
        const b = document.createElement('br');
        p.appendChild(t)
        paraContent.appendChild(p)
        paraContent.appendChild(b)
      }

      console.log(this.filler)
      blog.appendChild(paraContent)
    }
  },
  beforeMount() {
    this.fetchPost()
  },
  computed: {
    isUsersPath() {
      return this.$route.path === '/posts/:id'
    }
  }
}
</script>
