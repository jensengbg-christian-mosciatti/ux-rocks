<template>
  <div>
    <Input class="input inputName" label="Name" />
    <Input class="input inputEmail" label="Email" />
    <div class="cb-cont">
      <InputChckBox
        class="inputCb"
        label="Thursday"
        @handle-chk-box="updTicketDays($event)"
      />
      <InputChckBox
        class="inputCb"
        label="Friday"
        @handle-chk-box="updTicketDays($event)"
      />
      <InputChckBox
        class="inputCb"
        label="Saturday"
        @handle-chk-box="updTicketDays($event)"
      />
    </div>
    <InputStepper
      v-model:stepper="participants"
      class="inputStp"
      label="Participants"
    />
    <hr class="shop-divider" />
    <div>
      <div class="shop-line">
        <h2>{{ ticketType }}</h2>
        <span></span>
        <h2>{{ ticketPrice }}</h2>
      </div>
      <div class="shop-line">
        <h2>Participants</h2>
        <span></span>
        <h2>{{ participants }}</h2>
      </div>
      <hr />
      <div class="shop-line">
        <h2>Total</h2>
        <span></span>
        <h2>{{ ticketTotalPrice }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Input from './InputField'
import InputChckBox from './InputCheckbox'
import InputStepper from './InputStepper'
export default {
  data() {
    return {
      prices: [0, 255, 400, 600],
      days: 0,
      participants: 1,
    }
  },
  computed: {
    ticketType() {
      let str = ''
      switch (this.days) {
        case 1:
          str = 'One day ticket'
          break
        case 2:
          str = 'Two days ticket'
          break
        case 3:
          str = 'Three days ticket'
          break
      }
      return str
    },
    ticketPrice() {
      return this.prices[this.days]
    },
    ticketTotalPrice() {
      return this.ticketPrice * this.participants
    },
  },
  components: {
    Input,
    InputChckBox,
    InputStepper,
  },
  methods: {
    updTicketDays(value) {
      this.days = this.days + (value === true ? 1 : -1)
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  line-height: 1em;
}

.input {
  margin-left: 0;
  margin-right: 0;
}

.inputStp {
  margin-top: 2 * $margin-v-inputfield;
}

.cb-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: $margin-v-inputfield;
}
.shop-divider {
  margin: $margin-v-section;
  border-color: $gold;
}

.shop-line {
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0;

  span {
    border-bottom: 1px solid $white;
    margin: 0 0.5em;
    flex-grow: 1;
    height: 1em;
  }
}
</style>
