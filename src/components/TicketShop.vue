<template>
  <div>
    <Input class="input inputName" label="Name" />
    <Input class="input inputEmail" label="Email" />
    <div class="cb-cont">
      <InputChckBox
        class="inputCb"
        label="Thursday"
        @upd-days="updTicketDays($event)"
      />
      <InputChckBox
        class="inputCb"
        label="Friday"
        @upd-days="updTicketDays($event)"
      />
      <InputChckBox
        class="inputCb"
        label="Saturday"
        @upd-days="updTicketDays($event)"
      />
    </div>
    <InputChckBox class="inputCb" label="PlaceHolder" />
    <hr />
    <div>
      <div>
        <h2>{{ ticketType }}</h2>
        <span></span>
        <h2>{{ ticketPrice }}</h2>
      </div>
      <div>
        <h2>Participants</h2>
        <span></span>
        <h2>{{ participants }}</h2>
      </div>
      <hr />
      <div>
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
  },
  methods: {
    updTicketDays(value) {
      console.log('value is:', value)
      this.days = this.days + value
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  margin-left: 0;
  margin-right: 0;
}

.cb-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
