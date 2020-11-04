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
  background-color: $black;
  opacity: 0.9;
  z-index: 10;

  .close {
    cursor: pointer;
    margin: 21px;

    display: flex;
    justify-content: flex-end;
    img {
      cursor: pointer;
    }
  }

  .links {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      font-family: $font-h2;
      font-size: 20px;
      text-decoration: none;
      color: #ffffff;
      font-weight: bold;
      margin: 24px;

      &:hover {
        color: $gold;
      }
    }
  }
}
</style>
