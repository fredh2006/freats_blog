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

    <!-- <div class="main-container columns" id="main-container">
      <div class="container column" id="left-container"></div>
      <div class="container column" id="right-container"></div>
    </div> -->

    <div class="main-container columns" id="posts-container">
      <div class="column" id="c1"></div>
      <div class="column" id="c2"></div>
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
      date: '',
      slashDate1: '',
      slashDate2: ''
    }
  },
  methods: {
    click() {
      console.log('hello')
      this.$router.push('/posts/6531d94d0fa3f3d231200d37')
    },
    fetchPosts() {
      axios
        .get('https://freats-api-59bw.onrender.com/api/posts')
        .then((response) => {
          this.posts = response.data
          console.log(this.posts)
          console.log(this.posts[0].date)

          for (let i = 0; i < this.posts.length; i++) {
            this.date = this.posts[i].date.substring(0, 10)
            this.slashDate1 = this.date.replace('-', '/')
            this.slashDate2 = this.slashDate1.replace('-', '/')
            const c1 = document.getElementById('c1')
            const c2 = document.getElementById('c2')
            const card = document.createElement('div')
            card.classList.add('new-post')
            card.classList.add('card')

            const cardImage = document.createElement('div')
            cardImage.classList.add('new-img')
            cardImage.classList.add('card-image')

            let img = new Image()
            img.src = this.posts[i].prevImage;
            img.classList.add('preview-image')

            let a = document.createElement('a')
            a.appendChild(img)
            a.classList.add('card-image')
            a.href=`/posts/${this.posts[i]._id}`

            cardImage.appendChild(a)

            const cardContent = document.createElement('div')
            cardContent.classList.add('card-content')

            const title = document.createElement('div')
            title.classList.add('preview-title')
            const titleContent = document.createTextNode(this.posts[i].title)
            title.appendChild(titleContent)

            const time = document.createElement('div')
            time.classList.add('minuteread')
            time.classList.add('metadata-text')
            const timeContent = document.createTextNode(`${this.posts[i].time} Minute Read`)
            time.appendChild(timeContent)

            const meta = document.createElement('div')
            meta.classList.add('namedate')

            const author = document.createElement('div')
            author.classList.add('metadata')
            author.classList.add('metadata-text')
            const authorContent = document.createTextNode(this.posts[i].author)
            author.appendChild(authorContent)

            const date = document.createElement('div')
            date.classList.add('metadata')
            date.classList.add('metadata-text')
            const dateContent = document.createTextNode(this.slashDate2)
            date.appendChild(dateContent)

            meta.appendChild(author)
            meta.appendChild(date)

            const para = document.createElement('div')
            para.classList.add('preview-content')
            const paraContent = document.createTextNode(this.posts[i].firstPara)
            para.appendChild(paraContent)

            card.appendChild(cardImage)
            cardContent.appendChild(title)
            cardContent.appendChild(time)
            cardContent.appendChild(meta)
            cardContent.appendChild(para)
            card.appendChild(cardContent)

            if (i % 2 == 0) {
              c1.appendChild(card)
            } else {
              c2.appendChild(card)
            }
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
