<template>
    <div class="lineup-bg">
      <div id="lineup">
        <h1>Lineup</h1>
        <div class="btn-container">
          <PrimaryBtn title="ALL" />
          <GhostBtn title="THURSDAY" />
          <GhostBtn title="FRIDAY" />
          <GhostBtn title="SATURDAY" />
        </div>
        <LineupList />
      </div>

    </div>
</template>

<script>
import LineupList from '@/components/LineupList'
import PrimaryBtn from '@/components/PrimaryBtn'
import GhostBtn from '@/components/GhostBtn'


export default {
  components: {LineupList, PrimaryBtn, GhostBtn},
  data() {
    return {
      selectedName: '',
      selectedPic: '',
      selectedInfo: '',
    }
  },

  
}
</script>

<style lang="scss" scoped>
.lineup-bg {
  min-height: 100vh;
  min-width: 100vw;
  background-color: $black;
  background-image: $lineup-shadow, url('../assets/img/lineup-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

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
  
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
}

@media all and (max-width: $desktop-query) {
  #lineup {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
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
