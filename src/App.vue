<template>
  <div id="nav">
    <router-link to="/">
      <img src="./assets/uxrocks.svg" alt="logo" />
    </router-link>

    <img @click="showModal = true" src="./assets/menu.svg" alt="menu" />

    <MenuModal v-if="showModal" @close="showModal = false">
      <h1>hej</h1>
    </MenuModal>
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
  // methods: {
  //   showMenuModal() {
  //     this.showModal = true
  //   },
  //   closeMenuModal() {
  //     this.showModal = false
  //   },
  // },
  // data() {
  //   return {
  //     showModal: false,
  //   }
  // },
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
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // text-align: center;

  // color: #2c3e50;
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
}
</style>
