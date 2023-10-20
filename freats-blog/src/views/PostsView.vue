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

    <div class="main-container columns" id="main-container">
      <div class="container column" id="left-container"></div>
      <div class="container column" id="right-container"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: [],
      current_page: 1,
      records_per_page: 2,
      cards: []
    }
  },
  methods: {
    fetchPosts() { 
      axios
        .get('https://freats-api-59bw.onrender.com/api/posts')
        .then((response) => {
          this.posts = response.data
          console.log(this.posts)

          for (let i = 0; i < this.posts.length; i++) {
            const leftC = document.getElementById('left-container')
            const rightC = document.getElementById('right-container')
            const column = document.createElement('div')
            column.classList.add('column')
            column.classList.add('container')

            const card = document.createElement('div')
            card.classList.add('card')

            const cardImage = document.createElement('div')
            cardImage.classList.add('card-image')

            const figure = document.createElement('figure')
            figure.classList.add('image')

            const a = document.createElement('a');

            let img = new Image()
            img.src = '../../public/pilot.jpg'

            a.appendChild(img);
            a.href = `/posts/${this.posts[i]._id}`

            figure.appendChild(a)
            cardImage.appendChild(figure)

            const cardContent = document.createElement('div')
            cardContent.classList.add('card-content')

            const media = document.createElement('div')
            media.classList.add('media')

            const mediaContent = document.createElement('div')
            mediaContent.classList.add('media-content')

            const title = document.createElement('p')
            title.classList.add('title')
            title.classList.add('is-4')
            const titleContent = document.createTextNode(this.posts[i].title)
            title.appendChild(titleContent)

            const author = document.createElement('p')
            author.classList.add('author')
            author.classList.add('is-6')
            const authorContent = document.createTextNode(this.posts[i].author)
            author.appendChild(authorContent)

            const para = document.createElement('div')
            para.classList.add('content')
            const paraContent = document.createTextNode(this.posts[i].firstPara)
            para.appendChild(paraContent)

            mediaContent.appendChild(title)
            mediaContent.appendChild(author)
            media.appendChild(mediaContent)
            cardContent.appendChild(media)
            cardContent.appendChild(cardImage)
            cardContent.appendChild(para)
            card.appendChild(cardContent)
            column.appendChild(card)

            if (i % 2 == 0) {
              leftC.appendChild(column)
            } else {
              rightC.appendChild(column)
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  beforeMount() {
    this.fetchPosts()
  }
}
</script>
