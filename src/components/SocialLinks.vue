<template>
  <div class="social-cont">
    <a @click="linkSpotify"
      ><img src="@/assets/spotify.svg" alt="Spotify logo"
    /></a>
    <a @click="linkInsta"
      ><img src="@/assets/insta.svg" alt="Instagram logo"
    /></a>
    <a @click="linkFb"
      ><img src="@/assets/facebook.svg" alt="Facebook logo"
    /></a>
  </div>
</template>

<script>
export default {
  // general links to social media
  methods: {
    linkSpotify() {
      window.location = 'https://spotify.com/'
    },
    linkInsta() {
      window.location = 'https://instagram.com'
    },
    linkFb() {
      window.location = 'https://facebook.com'
    },
  },
}
</script>

<style lang="scss" scoped>
.social-cont {
  display: flex;
  justify-content: space-between;
  width: 70%;
}

a {
  position: relative;
}

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: $white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.2s ease-in-out 0s;
}

a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}
</style>