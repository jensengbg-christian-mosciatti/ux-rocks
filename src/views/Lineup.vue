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
      <Artist
        name="Metallica"
        pic="metallica.jpg"
        type="highlight"
        @artist-clicked="
          showModal(
            'Metallica',
            'metallica.jpg',
            'Metallica was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich. This iconic heavy metal band still fills arenas with their popular songs like “Master of puppets”, “Enter sandman” and “One”.',
          )
        "
      />
      <Artist
        name="System of a Down"
        pic="system-of-a-down.jpg"
        type="highlight"
        @artist-clicked="
          showModal(
            'System of a Down',
            'system-of-a-down.jpg',
            'Under construction',
          )
        "
      />
      <Artist
        name="Tonight Alive"
        pic="jan.jpg"
        type="rest"
        @artist-clicked="
          showModal('Tonight Alive', 'jan.jpg', 'Under construction')
        "
      />
      <Artist
        name="Tired Lion"
        pic="tired-lion.jpg"
        type="rest"
        @artist-clicked="
          showModal('Tired Lion', 'tired-lion.jpg', 'Under construction')
        "
      />
      <Artist
        name="Antagonist A.D"
        pic="ad.jpg"
        type="rest"
        @artist-clicked="
          showModal('Antagonist A.D', 'ad.jpg', 'Under construction')
        "
      />
    </div>

    <h2>More <span class="gold">bands</span> to be announced...</h2>

    <ArtistModal
      v-if="showArtistModal"
      @close="closeModal"
      :name="selectedName"
      :pic="selectedPic"
      :info="selectedInfo"
    />
  </div>
</template>

<script>
import Artist from '@/components/Artist'
import PrimaryBtn from '@/components/PrimaryBtn'
import GhostBtn from '@/components/GhostBtn'
import ArtistModal from '@/components/ArtistModal'
export default {
  components: {Artist, PrimaryBtn, GhostBtn, ArtistModal},
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
