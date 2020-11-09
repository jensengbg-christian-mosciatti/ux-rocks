<template>
  <footer>
    <section class="linkz">
      <h2>LINKS</h2>
      <a href="#/lineup">LINEUP</a>
      <a href="#/tickets">TICKETS</a>
      <a href="">INFORMATION</a>
      <a href="#/faq">FAQ'S</a>
      <a href="">NEWS</a>
      <a href="#/contact">CONTACT</a>
    </section>
    <section class="tickets">
      <div>
        <h2>TICKETS</h2>
        <a href="#/tickets">ON SALE</a>
        <a href="#/tickets">INFO</a>
      </div>
      <GhostBtn @click="this.$router.push('tickets')" title="BUY TICKETS" />
    </section>
    <section class="general">
      <div class="enquiries">
        <h2>GENERAL ENQUIRIES</h2>
        <p>
          Got a question? Please read through our <a href="#/faq">FAQ</a>’s
          carefully before emailing us!
          <a href="info@uxrocks.com">info@uxrocks.com</a>
        </p>
      </div>
      <div class="social-cont">
        <a href=""><img src="@/assets/spotify.svg" alt="Spotify logo"/></a>
        <a href=""><img src="@/assets/insta.svg" alt="Instagram logo"/></a>
        <a href=""><img src="@/assets/facebook.svg" alt="Facebook logo"/></a>
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
  grid-template: 'links' 1fr 'tickets' 1fr 'general' 1fr / 1fr;

  width: 18em;
  margin: $margin-v-section auto 0 auto;
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
section {
  margin: $margin-v-section/2 0;
}

section,
section > div:nth-of-type(1) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: $font-links;
    text-align: center;
    font-size: 0.85em;
    a {
      font-family: inherit;
      font-size: inherit;
    }
  }
}

.social-cont {
  display: flex;
  justify-content: space-between;
  width: 70%;
}

a {
  position: relative;
}

a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: $white;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.2s ease-in-out 0s;
}

a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

@media only screen and (min-width: $desktop-query) {
  footer {
    width: 100%;
    grid-template: 'links general tickets' 1fr / 1fr 1fr 1fr;
    max-width: $desktop-query;
  }
  .linkz {
    align-items: flex-start;
  }
  .tickets,
  section.tickets > div:nth-of-type(1) {
    align-items: flex-end;

    button {
      margin: 0;
    }
  }
}
</style>
