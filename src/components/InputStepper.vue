<template>
  <div class="stepperContainer">
    <p class="label">{{ label }}</p>
    <div class="innerContainer">
      <div class="leftPart" v-on:click="decreaseStepper(0)">
        <p>-</p>
      </div>
      <div class="middlePart">
        <p>
          {{ stepper }}
        </p>
      </div>
      <div class="rightPart" v-on:click="increaseStepper(10)">
        <p>+</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    stepper: Number,
  },
  // data() {
  //   return {
  //     stepper: 1,
  //   }
  // },

  methods: {
    increaseStepper(increaseLimit) {
      // if (this.stepper < increaseLimit) this.stepper++
      if (this.stepper < increaseLimit)
        this.$emit('update:stepper', this.stepper + 1)
    },

    decreaseStepper(decreaseLimit) {
      // if (this.stepper > decreaseLimit) this.stepper--
      if (this.stepper > decreaseLimit)
        this.$emit('update:stepper', this.stepper - 1)
    },
  },
}
</script>

<style lang="scss" scoped>
.stepperContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  // background-color: $black;
  margin-top: $margin-v-inputfield;
}

.innerContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: $drop-shadow;
}

.leftPart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.125em;
  width: 2.21em;
  border-radius: 3.125em 0em 0em 3.125em;
  background-color: $dark-grey;
  cursor: pointer;

  &:active {
    opacity: 0.5;
  }
}

.middlePart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.125em;
  width: 2.625em;
  background-color: $dark-grey;
  border-width: 0px 1px;
  border-style: solid;
  border-color: $black;
}

.rightPart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.125em;
  width: 2.21em;
  border-radius: 0em 3.125em 3.125em 0em;
  background-color: $dark-grey;
  cursor: pointer;
  &:active {
    opacity: 0.5;
  }
}

p {
  font-family: $font-label;
  font-size: 1em;
}

.label {
  padding-right: 1em;
}
</style>
