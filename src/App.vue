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

    <div class="links">
      <router-link @click="$emit('close')" to="/">HOME</router-link>
      <router-link @click="$emit('close')" to="/lineup">LINEUP</router-link
      ><router-link @click="$emit('close')" to="/tickets">TICKETS</router-link
      ><router-link @click="$emit('close')" to="/contact">CONTACT</router-link
      ><router-link @click="$emit('close')" to="/faq">FAQ</router-link>
    </div>

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

  .hamburger-menu {
    cursor: pointer;
    position: absolute;
    height: 30px;
    width: 30px;
    top: $margin-hamburger;
    right: $margin-hamburger;
    display: none;
  }
  .links {
    a {
      &:hover {
        color: $gold;
      }
    }
  }
}

@media all and (max-width: $desktop-query) {
  #nav {
    .hamburger-menu {
      display: block;
    }
  }

  .links {
    display: none;
  }
}
</style>
