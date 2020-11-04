<template>
  <div class="home">
    <PrimaryBtn title="PRIMARY" />
    <GhostBtn title="GHOST" />

    
  </div>
</template>

<script>
// @ is an alias to /src
import PrimaryBtn from '@/components/PrimaryBtn'
import GhostBtn from '@/components/GhostBtn'

export default {
  name: 'Home',
  components: {
    PrimaryBtn,
    GhostBtn,
  },
}
</script>

<style lang="scss" scoped>
</style>