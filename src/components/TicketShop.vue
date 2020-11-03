<template>
  <div>
    <Input label="Name" />
    <div>
      <label for="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
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
label {
  color: $white;
}
</style>
