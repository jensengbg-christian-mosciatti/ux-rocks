<template>
  <div id="lineup">
    <h1>Lineup</h1>
    <div class="btn-container">
      <PrimaryBtn title="ALL" />
      <GhostBtn title="THURSDAY" />
      <GhostBtn title="FRIDAY" />
      <GhostBtn title="SATURDAY" />
    </div>
    <div class="lineup-container">
      <Artist name="Metallica" pic="metallica.jpg" type="highlight" />
      <Artist
        name="System of a Down"
        pic="system-of-a-down.jpg"
        type="highlight"
      />
      <Artist name="Tonight Alive" pic="jan.jpg" type="rest" />
      <Artist name="Tired Lion" pic="tired-lion.jpg" type="rest" />
      <Artist name="Antagonist A.D" pic="ad.jpg" type="rest" />
    </div>
    <h2>More <span class="gold">bands</span> to be announced...</h2>
  </div>
</template>

<script>
import Artist from '@/components/Artist'
import PrimaryBtn from '@/components/PrimaryBtn'
import GhostBtn from '@/components/GhostBtn'
export default {
  components: {Artist, PrimaryBtn, GhostBtn},
}
</script>

<style lang="scss" scoped>
#lineup {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  max-width: 1400px;
  flex-direction: column;
  h1 {
    color: $gold;
    margin: 50px;
  }
  h2 {
    max-width: 200px;
    text-align: center;
    line-height: 1.6em;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lineup-container {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media all and (max-width: 1000px) {
  #lineup {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
    .btn-container {
      flex-wrap: wrap;
      max-width: 500px;
      .primary-btn,
      .ghost-btn {
        margin: $margin-v-mobile-button;
      }
    }
  }
}
</style>
