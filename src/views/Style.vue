<template>
  <div class="cont">
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor numquam
        quidem incidunt, nostrum dicta eum quod aperiam porro assumenda eius
        minus tempora quas saepe, maiores repellat fugit aut ipsum atque!
      </p>
    </div>
    <div>
      <h3>Lorem ipsum dolor</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor numquam
        quidem incidunt, nostrum dicta eum quod aperiam porro assumenda eius
        minus tempora quas saepe, maiores repellat fugit aut ipsum atque!
      </p>
    </div>
  </div>
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
