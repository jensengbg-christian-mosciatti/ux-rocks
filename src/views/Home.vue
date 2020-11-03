<template>
  <div class="home">
    <PrimaryBtn title="PRIMARY" />
    <GhostBtn title="GHOST" />

    <div style="width: 25em">
      <InputField label="Name" />
      <InputField label="Name" disabled />
      <InputField label="Message" multiline />
      <InputField label="Message" multiline disabled />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PrimaryBtn from '@/components/PrimaryBtn'
import GhostBtn from '@/components/GhostBtn'
import InputField from '@/components/InputField'

export default {
  name: 'Home',
  components: {
    PrimaryBtn,
    GhostBtn,
    InputField,
  },
}
</script>

<style lang="scss" scoped>
</style>