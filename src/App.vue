<template>
  <div
    class="main-container"
    :class="{
      fade: $store.state.fadeBck,
      lineup: 'lineup' === $store.state.bkgClass,
      'home-bg': 'home-bg' === $store.state.bkgClass,
      ticket: 'ticket' === $store.state.bkgClass,
    }"
  ></div>
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
      <router-link @click="$emit('close')" to="/lineup">LINEUP</router-link>
      <router-link @click="$emit('close')" to="/tickets">TICKETS</router-link>
      <router-link @click="$emit('close')" to="/contact">CONTACT</router-link>
      <router-link @click="$emit('close')" to="/faq">FAQ</router-link>
    </div>

    <MenuModal v-if="showModal" @close="showModal = false" />
  </div>
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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
  created() {
    this.handleBkg(this.$route.path)
  },
  methods: {
    handleBkg(path) {
      this.$store.commit('setFade')
      switch (path) {
        case '/lineup':
          this.$store.commit('setBkgClass', 'lineup')
          break
        case '/':
          this.$store.commit('setBkgClass', 'home-bg')
          break
        case '/tickets':
          this.$store.commit('setBkgClass', 'ticket')
          break
        default:
          this.$store.commit('setBkgClass', '')
      }
      setTimeout(() => {
        this.$store.commit('removeFade')
      }, 1000)
    },
  },
  watch: {
    $route(to, from) {
      if (to.path === from.path) return
      this.handleBkg(to.path)
    },
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
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .main-container {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

#nav {
  // margin: $margin-v-img;
  padding: $margin-v-img;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  // opacity: 0;
  opacity: 1;
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
