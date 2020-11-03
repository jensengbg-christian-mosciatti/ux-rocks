<template>
  <div id="artist" :class="type">
    <img :src="require(`@/assets/${pic}`)" alt="Metallica">
  </div>
</template>

<script>
export default {
  props: {
    pic: String,
    type: String
  }
}
</script>

<style lang="scss" scoped>
#artist {
  overflow: hidden;
  margin: 8px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.highlight {
  width: 33vw;
  min-width: 333px;
  min-height: 180px;
  max-width: 670px;
  max-height: 270px;
}
.rest {
  width: 21vw;
  min-width: 200px;
  min-height: 180px;
  max-width: 450px;
  max-height: 201px;
}
@media all and (max-width: 1000px) {
.highlight, .rest {
  margin: 8px;
  width: 70vw;
  min-width: 333px;
  min-height: 180px;
  max-width: 600px;
  max-height: 270px;
  overflow: hidden;
  }
}
</style>
