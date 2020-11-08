<template>
  <div id="artist" :class="type" @click="$emit('artist-clicked')">
    <h2 class="artist-name">{{ name }}</h2>
    <div class="filter-shadow"></div>
    <img :src="require(`@/assets/${pic}`)" :alt="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    pic: String,
    type: String,
  },
}
</script>

<style lang="scss" scoped>
#artist {
  position: relative;
  overflow: hidden;
  margin: 8px;
  // background: radial-gradient(50% 50% at 50% 49.33%, rgba(26, 28, 32, 0.33) 17.71%, rgba(26, 28, 32, 0.75) 100%);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .artist-name {
    color: $white;
    position: absolute;
    z-index: 2;
    bottom: 20px;
    right: 20px;
    pointer-events: none;
  }
  .filter-shadow {
    position: absolute;
    // pointer-events: none;
    height: 100%;
    width: 100%;
    background: radial-gradient(
      50% 50% at 50% 49.33%,
      rgba(26, 28, 32, 0.33) 17.71%,
      rgba(26, 28, 32, 0.75) 100%
    );
    &:hover {
      background: radial-gradient(
        50% 50% at 50% 49.33%,
        rgba(26, 28, 32, 0.13) 17.71%,
        rgba(26, 28, 32, 0.432) 100%
      );
      transition-duration: 0.1s;
      transition-timing-function: ease-out;
    }
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
  .highlight,
  .rest {
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
