<template>
  <div class="inputContainer">
    <p v-if="disabled" class="p-disabled">{{ label }}</p>
    <p v-if="!disabled">{{ label }}</p>
    <input v-if="!multiline" type="text" size="50" :disabled="disabled" />
    <textarea v-if="multiline" size="50" rows="6" :disabled="disabled" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    multiline: Boolean,
    disabled: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: $margin-v-inputfield;
  margin-left: $margin-h-inputfield;
  margin-right: $margin-h-inputfield;
}

p {
  color: $white;
  font-family: $font-input;
}

.p-disabled {
  color: $dark-grey;
}

input {
  background-color: $dark-grey;
  height: $input-height;
  border-radius: $input-br;
  border: none;
  box-shadow: $drop-shadow;
  color: $white;
  font-family: $font-input;
  outline-style: none;
  padding-left: 2.5em;
  padding-right: 2.5em;
  width: 100%;

  &:focus {
    box-shadow: $focus-glow-input;
  }

  &:disabled {
    background-color: $black;
    color: $dark-grey;
    box-shadow: none;
    border-color: $dark-grey;
    border-width: 1px;
    border-style: solid;
    cursor: auto;
  }
}

textarea {
  background-color: $dark-grey;
  border-radius: $input-br;
  border: none;
  box-shadow: $drop-shadow;
  color: $white;
  resize: none;
  font-family: $font-input;
  outline-style: none;
  padding-left: 2.5em;
  padding-right: 2.5em;
  width: 100%;
  padding-top: 1em;

  &:focus {
    box-shadow: $focus-glow-input;
  }

  &:disabled {
    background-color: $black;
    color: $dark-grey;
    box-shadow: none;
    border-color: $dark-grey;
    border-width: 1px;
    border-style: solid;
    cursor: auto;
  }
}
</style>
