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

    <div class="main-container columns" id="posts-container">
      <div class="column" id="left-column"></div>
      <div class="column" id="right-column"></div>
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
      cards: [],
      placeholder: '',
      slashDate: '',
      date: ''
    }
  },

  methods: {
  fetchPosts() {
      axios
        .get('https://freats-api-59bw.onrender.com/api/posts')
        .then((response) => {
          this.posts = response.data

          let postCount = 0

          /**
           * loops through posts and creates a post card w/ all info
           */
          for (let i = this.posts.length - 1; i >= 0; i--) {
            //turns date format from dashes to slashes

            this.placeholder = this.posts[i].date.substring(0, 10)
            this.slashDate = this.placeholder.replace('-', '/')
            this.date = this.slashDate.replace('-', '/')

            const leftColumn = document.getElementById('left-column')
            const rightColumn = document.getElementById('right-column')

            const card = document.createElement('div') //creates actual pot
            card.classList.add('new-post')
            card.classList.add('card')

            //create posts reactively
            const cardImage = document.createElement('div') //creates post image container
            cardImage.classList.add('new-img')
            cardImage.classList.add('card-image')

            let img = new Image() //creates post image
            img.src = this.posts[i].prevImage
            img.classList.add('preview-image')

            let a = document.createElement('a') //attaches link to post on image
            a.appendChild(img)
            a.classList.add('card-image')
            a.href = `/posts/${this.posts[i]._id}`

            cardImage.appendChild(a)

            const cardContent = document.createElement('div')
            cardContent.classList.add('card-content')

            const title = document.createElement('div') //creates post title
            title.classList.add('preview-title')
            const titleContent = document.createTextNode(this.posts[i].title)
            title.appendChild(titleContent)

            const time = document.createElement('div') //creates post time
            time.classList.add('minuteread')
            time.classList.add('metadata-text')
            const timeContent = document.createTextNode(`${this.posts[i].time} Minute Read`)
            time.appendChild(timeContent)

            const meta = document.createElement('div')
            meta.classList.add('namedate')

            const author = document.createElement('div') //creates post author
            author.classList.add('metadata')
            author.classList.add('metadata-text')
            const authorContent = document.createTextNode(this.posts[i].author)
            author.appendChild(authorContent)

            const date = document.createElement('div') //creates post date
            date.classList.add('metadata')
            date.classList.add('metadata-text')
            const dateContent = document.createTextNode(this.date)
            date.appendChild(dateContent)

            meta.appendChild(author)
            meta.appendChild(date)

            const para = document.createElement('div') //creates post intro
            para.classList.add('preview-content')
            const paraContent = document.createTextNode(this.posts[i].firstPara)
            para.appendChild(paraContent)

            card.appendChild(cardImage)
            cardContent.appendChild(title)
            cardContent.appendChild(time)
            cardContent.appendChild(meta)
            cardContent.appendChild(para)
            card.appendChild(cardContent)

            if (postCount % 2 == 0) {
              leftColumn.appendChild(card)
            } else {
              rightColumn.appendChild(card)
            }
            postCount++
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  beforeMount() {
    this.fetchPosts()
  }
}
</script>
