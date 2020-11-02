<template>
  <button class="ghost-btn">
      {{title}}
  </button>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
    .ghost-btn {
        background-color: transparent;
        border: 1px solid $gold;
        width: $btn-width;
        height: $btn-height;
        border-radius: $btn-br;
        box-shadow: $drop-shadow;
        color: $gold;
        &:hover{
            box-shadow: $hover-glow;
        }
        &:active{
            background-color: $gold;
            color: $black;
        }
        &:disabled{
            background-color: none;
            border: 1px solid $grey-3;
            color: $grey-3;
            box-shadow: none;
            cursor: auto;
        }
    }
</style>