<template>
  <div class="cont"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cont div {
  margin: 1em;
  width: 400px;
  // height: 100px;
  background-color: rgb(26, 28, 32);
  color: radial-gradient(
    circle,
    rgba(26, 28, 32, 0.33) 20%,
    rgba(26, 28, 32, 0.75) 100%
  );
}
h1,
h3,
h2 {
  color: $gold;
}
p {
  color: $white;
  padding: $margin-v-p 1em;
}
</style>
