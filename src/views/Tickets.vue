<template>
  <main>
    <section class="title">
      <h1>Tickets</h1>
    </section>
    <section class="main-cont">
      <div class="divider"></div>
      <div class="inner-box info-box">
        <article>
          <h2>How to get tickets</h2>
          <p>
            You can buy tickets online right here in this page. <br />
            If you don't want to buy tickets online, we have 10 ticket windows
            at the entrance of the hall.
          </p>
        </article>
        <article>
          <h2>Prices</h2>
          <p>
            - One day ticket: 250 Kr <br />
            - Two days ticket: 400 Kr <br />
            - Three days ticket: 600 Kr
          </p>
        </article>
      </div>
      <div class="inner-box ticket-box">
        <h2>Buy Tickets Online</h2>
        <Ticket />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          pariatur inventore laboriosam maxime. Ipsum repellendus magnam ea
          officiis nisi fugiat, nobis facere atque eos. Expedita odit explicabo
          dignissimos architecto unde. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Cupiditate pariatur inventore laboriosam maxime.
          Ipsum repellendus magnam ea officiis nisi fugiat, nobis facere atque
          eos. Expedita odit explicabo dignissimos architecto unde. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Cupiditate pariatur
          inventore laboriosam maxime. Ipsum repellendus magnam ea officiis nisi
          fugiat, nobis facere atque eos. Expedita odit explicabo dignissimos
          architecto unde.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import Ticket from '@/components/TicketShop.vue'
export default {
  components: {
    Ticket,
  },
  beforeCreate() {
    document.documentElement.className = 'ticket'
  },
  beforeUnmount() {
    document.documentElement.className = ''
  },
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-cont {
  display: grid;
  column-gap: 10em;
  // grid-template: 1fr 1fr / 1fr;
  grid-template: max-content max-content / 1fr;
  position: relative;
}
.divider {
  visibility: hidden;
  position: absolute;
  width: 0;
  height: 0;
}
.inner-box {
  padding: $padding-p;
  background-color: $black-50;
  max-width: 28em;
}

article:not(:last-of-type) {
  margin-bottom: $margin-v-p;
}

h1 {
  color: $white;
}

h3,
h2 {
  color: $gold;
  margin-bottom: 0.4em;
}
p {
  color: $white;
  // padding: $margin-v-p 1em;
}

@media only screen and (min-width: $desktop-query) {
  .main-cont {
    grid-template: 1fr / 1fr 1fr;
  }
  .divider {
    visibility: visible;
    position: absolute;
    top: 10%;
    width: 50%;
    height: 80%;
    border-right: 1px solid $gold;
    z-index: -1;
  }
}
</style>
