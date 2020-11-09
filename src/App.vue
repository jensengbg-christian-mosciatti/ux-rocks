<template>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer,
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

.fade-enter-active,
.fade-leave-active {
  transition: $fade;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 0;
  // opacity: 1;
}

</style>
