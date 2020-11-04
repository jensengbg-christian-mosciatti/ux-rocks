<template>
  <div>
    <Input class="input inputName" label="Name" />
    <Input class="input inputEmail" label="Email" />
  </div>
</template>

<script>
import Input from './InputField'
export default {
  components: {
    Input,
  },
}
</script>

<style lang="scss" scoped>
.input {
  margin-left: 0;
  margin-right: 0;
}
</style>
