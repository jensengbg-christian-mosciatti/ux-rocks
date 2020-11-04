<template>
  <div id="nav">
    <router-link to="/">
      <img src="./assets/uxrocks.svg" alt="logo" />
    </router-link>

    <img
      class="hamburger-menu"
      @click="showModal = true"
      src="./assets/menu.svg"
      alt="menu"
    />

    <MenuModal v-if="showModal" @close="showModal = false" />

  </div>
  <router-view />
</template>

<script>
import MenuModal from '@/components/menuModal.vue'
export default {
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    MenuModal,
  },
}
</script>

<style lang="scss">
@import '@/styles/_general';

html {
  box-sizing: border-box;
  background-color: $black;
}
* {
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  margin: $margin-v-img;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
  .hamburger-menu {
    cursor: pointer;
  }
}
</style>
