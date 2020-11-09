<template>
  <div id="lineup-list">
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
          )"/>
      <Artist
        name="System of a Down"
        pic="system-of-a-down.jpg"
        type="highlight"
        @artist-clicked="
          showModal(
            'System of a Down',
            'system-of-a-down.jpg',
            'Under construction',)"/>
      <Artist
        name="Tonight Alive"
        pic="jan.jpg"
        type="rest"
        @artist-clicked="
          showModal('Tonight Alive', 'jan.jpg', 'Under construction')"/>
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
import ArtistModal from '@/components/ArtistModal'
export default {
    components: { Artist, ArtistModal },
    data() {return{
      showArtistModal: false,
    }},
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

<style lang="scss">
#lineup-list {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  max-width: 1400px;
  flex-direction: column;
    .lineup-container {
        margin: 50px auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
}
h2 {
    max-width: 200px;
    text-align: center;
    line-height: 1.6em;
}
</style>