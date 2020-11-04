<template>
  <div class="home">
    <main>
      <section >
      <h1 class="gold">UX ROCKS</h1>
      <p class="small-p">7-11 July Karlskrona, Sweden</p>
      <PrimaryBtn @click="this.$router.push('tickets')" title="TICKETS" />
    </section>
    <section>
      <h2>Metallica</h2>
      <h2 class="gold">System of a Down</h2>
      <h2>Antagonist A.D</h2>
      <h2 class="gold">Tired Lion</h2>
      <GhostBtn @click="this.$router.push('lineup')" title="FULL LINE-UP" />
    </section>
    </main>
    
    <section>
      <p>Taking place in the middle of summer,
          in the cozy town Karlskrona. UX Rocks
          is a festival for the dedicated to give you
          epic rock music and one hell of a good time.
      </p>
    </section>
    <section>
      <p>artist list goes here</p>
    </section>
    <section>
      <h1 class="gold">
        THE <br> BEST <br> ROCK <br> FESTIVAL
      </h1>
    </section>
    <footer>
      <p>
        footer goes here
      </p>
    </footer>

    
  </div>
</template>

<script>
// @ is an alias to /src
import PrimaryBtn from '@/components/PrimaryBtn'
import GhostBtn from '@/components/GhostBtn'

export default {
  name: 'Home',
  components: {
    PrimaryBtn,
    GhostBtn,
  },
  beforeCreate() {
    document.documentElement.className = 'home-bg'
  },
  beforeUnmount() {
    document.documentElement.className = ''
  },
}
</script>

<style lang="scss" scoped>
  .home {
    main {
      height: calc(100vh - 60px);
      margin-top: 5em;
      margin-bottom: 0;
    }
    p {
      text-align: center;
      width: 280px;
    }
    display: grid;
    width: 100vw;
    grid: 1fr;
    section, footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-self: center;
      justify-self: center;
      margin: $margin-v-section 0;
      h2 {
        margin: .2em 0 0 0;
      }
    }
  }
  
</style>