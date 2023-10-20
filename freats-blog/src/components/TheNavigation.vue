<template>
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
</template>
