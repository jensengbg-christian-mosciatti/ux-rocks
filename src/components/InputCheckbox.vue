<template>
  <div class="inputContainer">
    <input
      @input="handleInput"
      :disabled="disabled"
      type="checkbox"
      :name="label"
      :id="label"
    />
    <label :for="label"
      >{{ label }}<span class="checkmark">&#8515;</span></label
    >
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    disabled: Boolean,
  },
  methods: {
    handleInput(e) {
      this.$emit('handle-chk-box', e.target.checked)
    },
  },
}
</script>

<style lang="scss" scoped>
.inputContainer {
  display: inline-flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin-top: $margin-v-inputfield;
  // margin-left: $margin-h-inputfield;
  // margin-right: $margin-h-inputfield;
}

label {
  position: relative;
  color: $white;
  font-family: $font-input;
}

.checkmark {
  visibility: hidden;
  position: absolute;
  right: -0.8em;
  top: -0.2em;
  width: 0;
  height: 0;
  user-select: none;

  font-family: $font-input;
  font-size: 2em;
  line-height: 0.4em;
  color: $white;
  text-shadow: 0 0 0.3em $white;
  transform: rotate(45deg);
}

input {
  margin-left: 1em;
  width: 1.57em;
  height: 1.57em;
  appearance: none;
  outline: none;
  background-color: $dark-grey;

  border-radius: 0.2em;
  border: 2px solid $dark-grey;

  box-shadow: $drop-shadow;
  color: $white;

  &:focus {
    box-shadow: $focus-glow-input;
    border: 2px solid $white;
  }
  &:focus + label {
    text-shadow: 0 0 0.2em $white;
  }
  &:checked ~ label .checkmark {
    visibility: visible;
  }

  &:disabled {
    background-color: $black;
    // border: 2px solid $dark-grey;
  }
  &:disabled + label {
    color: $dark-grey;
  }
}
</style>
