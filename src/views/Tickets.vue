<template>
  <main>
    <section class="title">
      <h1>Tickets</h1>
    </section>
    <section class="main-cont">
      <div class="inner-box info-box">
        <article>
          <h2>How to get tickets</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            pariatur inventore laboriosam maxime. Ipsum repellendus magnam ea
            officiis nisi fugiat, nobis facere atque eos. Expedita odit
            explicabo dignissimos architecto unde.
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
        <h2>Title</h2>
        <p>Paragraph</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
body {
  background: url('../assets/img/bck-tickets.jpg');
  background-color: pink;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-cont {
  display: grid;
  column-gap: 2em;
  grid-template: 1fr / 1fr 1fr;
}

.inner-box {
  padding: $padding-p;
}

article:not(:last-of-type) {
  max-width: 20em;
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

@media screen {
}
</style>
