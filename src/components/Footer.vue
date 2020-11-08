<template>
  <footer>
    <section class="linkz">
      <h2>LINKS</h2>
      <a href="">LINEUP</a>
      <a href="">TICKETS</a>
      <a href="">INFORMATION</a>
      <a href="">FAQ'S</a>
      <a href="">NEWS</a>
      <a href="">CONTACT</a>
    </section>
    <section class="tickets">
      <div>
        <h2>TICKETS</h2>
        <a href="">ON SALE</a>
        <a href="">INFO</a>
      </div>
      <GhostBtn title="BUY TICKETS" />
    </section>
    <section class="general">
      <div class="enquiries">
        <h2>GENERAL ENQUIRIES</h2>
        <p>
          Got a question? Please read through our FAQ’s carefully before
          emailing us! info@uxrocks.com
        </p>
      </div>
      <div class="social-cont">
        <img src="@/assets/spotify.svg" alt="Spotify logo" />
        <img src="@/assets/insta.svg" alt="Instagram logo" />
        <img src="@/assets/facebook.svg" alt="Facebook logo" />
      </div>
    </section>
  </footer>
</template>

<script>
import GhostBtn from './GhostBtn'
export default {
  components: {
    GhostBtn,
  },
}
</script>

<style lang="scss" scoped>
footer {
  // display: flex;
  // flex-direction: column;
  display: grid;
  grid-template: 'links' 1fr 'general' 1fr 'tickets' 1fr / 1fr;

  width: 18em;
  margin: auto;
}

.linkz {
  grid-area: links;
}

.tickets {
  grid-area: tickets;
}

.general {
  grid-area: general;
}

section,
section > div:nth-of-type(1) {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: $margin-v-section/2 0;
  p {
    text-align: center;
  }
}

.social-cont {
  display: flex;
  justify-content: space-between;
  width: 70%;
}

// @media only screen and (min-width: $desktop-query) {
//   footer {
//     width: 100%;
//     flex-direction: row;
//     max-width: $desktop-query;
//   }
// }
</style>
