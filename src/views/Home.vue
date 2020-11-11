<template>
  <div class="home home-bg">
    <!-- <Nav/> -->
    <main>
      <section>
        <h1 class="gold">UX ROCKS</h1>
        <p class="small-p">7-11 July Karlskrona, Sweden</p>
        <PrimaryBtn @click="this.$router.push('tickets')" title="TICKETS" />
      </section>
      <section class="artist-list">
        <ul>
          <h2>Metallica</h2>
          <h2 class="gold">System of a Down</h2>
          <h2>Antagonist A.D</h2>
          <h2 class="gold">Tired Lion</h2>
        </ul>
        <GhostBtn @click="this.$router.push('lineup')" title="FULL LINE-UP" />
      </section>
    </main>

    <LineupList class="lineup" />
    <section class="info-right">
      <p>
        Taking place in the middle of summer, in the cozy town Karlskrona. UX
        Rocks is a festival for the dedicated to give you epic rock music and
        one hell of a good time.
      </p>
    </section>
    <section class="info-left">
      <h1 class="gold">
        THE <br />
        BEST <br />
        ROCK <br />
        FESTIVAL
      </h1>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import PrimaryBtn from '@/components/PrimaryBtn'
import GhostBtn from '@/components/GhostBtn'
import LineupList from '@/components/LineupList'

export default {
  name: 'Home',
  components: {
    PrimaryBtn,
    GhostBtn,
    LineupList,
  },
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid: 1fr;

  main {
    height: calc(100vh - 60px);
    margin-top: 5em;
    margin-bottom: 0;
  }
  p {
    text-align: center;
    width: 280px;
  }
  ul {
    text-align: center;
  }

  section,
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    margin: $margin-v-section 0;
    h2 {
      margin: 0.2em 0 0 0;
    }
  }
}

@media all and (min-width: $desktop-query) {
  .home {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'main main' 'lineup lineup' 'info-left info-right';
    .lineup {
      grid-area: lineup;
    }
    .info-left {
      grid-area: info-left;
      justify-self: flex-end;
      margin-right: 6em;
    }
    .info-right {
      justify-self: flex-start;
      grid-area: info-right;
      margin-left: 6em;
    }
    main {
      grid-area: main;
      .artist-list {
        ul {
          display: flex;
          flex-direction: row;
          h2 {
            margin: 0.2em 1em 0 1em;
          }
        }
      }
    }
  }
}
</style>
