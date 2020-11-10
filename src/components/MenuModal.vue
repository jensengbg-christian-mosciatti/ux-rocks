<template>
  <div class="menuModal">
    <div class="close">
      <img
        class="close-x"
        @click="$emit('close')"
        src="../assets/X.svg"
        alt="X"
      />
    </div>
    <div class="links">
      <router-link @click="$emit('close')" to="/">HOME</router-link>
      <router-link @click="$emit('close')" to="/lineup">LINEUP</router-link
      ><router-link @click="$emit('close')" to="/tickets">TICKETS</router-link
      ><router-link @click="$emit('close')" to="/contact">CONTACT</router-link
      ><router-link @click="$emit('close')" to="/faq">FAQ</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.menuModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 28, 32, 0.9);
  z-index: 10;
  .close {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    img {
      height: 30px;
      width: 30px;
      cursor: pointer;
      position: absolute;
      top: $margin-hamburger;
      right: $margin-hamburger;
    }
  }
  .links {
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
      &:hover {
        color: $gold;
        transition: 0.3s ease-in-out;
      }
    }
  }
}
</style>
