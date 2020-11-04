<template>
  <button class="primary-btn">
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
    .primary-btn {
        font-family: $font-button;
        font-weight: 500;
        font-size: 12px;
        background-color: $gold;
        width: $btn-width;
        height: $btn-height;
        border-radius: $btn-br;
        box-shadow: $drop-shadow;
        color: $black;
        margin: $margin-v-button;
        transition: 0.2s;
        &:hover{
            box-shadow: $hover-glow;
        }
        &:active{
            background-color: transparent;
            color: $gold;
        }
        &:disabled{
            background-color: $grey-4;
            color: $grey-3;
            box-shadow: none;
            cursor: auto;
        }
    }
</style>