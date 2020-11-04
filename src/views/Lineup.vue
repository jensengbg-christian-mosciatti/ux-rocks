<template>
  <div id="lineup">
      <Artist name="Metallica" pic="metallica.jpg" type="highlight"/>
      <Artist name="System of a Down" pic="system-of-a-down.jpg" type="highlight"/>
      <Artist name="Tonight Alive" pic="jan.jpg" type="rest"/>
      <Artist name="Tired Lion" pic="tired-lion.jpg" type="rest"/>
      <Artist name="Antagonist A.D" pic="ad.jpg" type="rest"/>
  </div>
</template>

<script>
import Artist from '@/components/Artist'
export default {
  components: { Artist },
}
</script>

<style lang="scss" scoped>
#lineup {
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 70vw;
  max-width: 1400px;
  flex-wrap: wrap;
}


@media all and (max-width: 1000px) {
  #lineup {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}



</style>
