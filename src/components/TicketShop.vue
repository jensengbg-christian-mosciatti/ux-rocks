<template>
  <div>
    <Input disabled="true" class="input inputName" label="Name" />
    <Input class="input inputEmail" label="Email" />
    <div class="cb-cont">
      <InputChckBox class="inputCb" label="Thursday" />
      <InputChckBox class="inputCb" label="Friday" />
      <InputChckBox class="inputCb" label="Saturday" />
    </div>
  </div>
</template>

<script>
import Input from './InputField'
import InputChckBox from './InputCheckbox'
export default {
  components: {
    Input,
    InputChckBox,
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
