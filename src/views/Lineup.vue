<template>
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
</template>

<script>
import LineupList from '@/components/LineupList'
import PrimaryBtn from '@/components/PrimaryBtn'
import GhostBtn from '@/components/GhostBtn'
export default {
  components: {LineupList, PrimaryBtn, GhostBtn},
  data() {
    return {
      showArtistModal: false,
      selectedName: '',
      selectedPic: '',
      selectedInfo: '',
    }
  },

  methods: {
    showModal(name, pic, info) {
      this.selectedName = name
      this.selectedPic = pic
      this.selectedInfo = info
      this.showArtistModal = true
    },

    closeModal() {
      this.showArtistModal = false
    },
  },
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
