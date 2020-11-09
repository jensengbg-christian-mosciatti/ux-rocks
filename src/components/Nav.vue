<template>
  <div class="nav-positioning">
    <div id="nav">
      <router-link to="/">
        <img src="@/assets/uxrocks.svg" alt="logo" />
      </router-link>

      <img
        class="hamburger-menu"
        @click="showModal = true"
        src="@/assets/menu.svg"
        alt="menu"
      />

      <div class="links">
        <router-link  to="/">HOME</router-link>
        <router-link  to="/lineup">LINEUP</router-link>
        <router-link  to="/tickets">TICKETS</router-link>
        <router-link  to="/contact">CONTACT</router-link>
        <router-link  to="/faq">FAQ</router-link>
      </div>
      <transition name="fade" mode="out-in">
        <MenuModal v-if="showModal" @close="showModal = false" />
      </transition>
      
    </div>

  </div>
</template>

<script>
import MenuModal from '@/components/MenuModal.vue'

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

<style lang="scss" scoped>
    .nav-positioning {
      position: absolute;
      width: 100%;
      z-index: 999;
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
            transition: .3s ease-in-out;
        }
        }
    }
}
@media all and (max-width: $desktop-query) {
  #nav {
    .hamburger-menu {
      display: block;
    }
    > .links {
      display: none;
    }
  }
}
</style>