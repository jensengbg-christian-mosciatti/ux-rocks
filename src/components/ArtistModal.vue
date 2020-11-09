<template>
  <div class="modalContainer">
    <div class="close">
      <img
        id="closeMobile"
        class="close-x"
        @click="$emit('close')"
        src="../assets/X.svg"
        alt="X"
      />
    </div>
    <div class="filter-shadow"></div>
    <div class="imageContainer">
      <img :src="require(`@/assets/${pic}`)" />
      <div class="close">
        <img
          id="closeDesktop"
          class="close-x"
          @click="$emit('close')"
          src="../assets/X.svg"
          alt="X"
        />
      </div>
    </div>

    <div class="nameInfoContainer">
      <h2>{{ name }}</h2>
      <p>
        {{ info }}
      </p>
    </div>
    <div class="socialContainer">
      <SocialLinks />
    </div>
  </div>
</template>

<script>
import SocialLinks from '@/components/SocialLinks.vue'
export default {
  props: {
    name: String,
    pic: String,
    info: String,
  },

  components: {
    SocialLinks,
  },
}
</script>

<style lang ="scss" scoped>
.modalContainer {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $black-90;
  z-index: 1000;
  overflow: scroll;
}

img {
  margin-top: 5.8em;
  object-fit: cover;
  align-self: center;
  width: 100%;
  height: 14.25em;
}

.close {
  cursor: pointer;
  display: flex;
  justify-content: flex-end;

  img {
    height: 30px;
    width: 30px;
    margin-top: 0;
    cursor: pointer;
    position: absolute;
    top: $margin-hamburger;
    right: $margin-hamburger;
  }
}

.nameInfoContainer {
  justify-content: center;
  align-items: center;
  background-color: $gold;
  border-radius: $btn-br;
  box-shadow: $drop-shadow;
  color: $black;
  margin: 2em;
  padding: 0.8em 1.8em 1.8em 1.8em;

  h2 {
    font-family: $font-title;
    font-size: 40px;
    line-height: 1.2em;
  }

  p {
    margin-top: 1em;
    font-family: $font-text;
    font-weight: 500;
    color: $black;
  }
}

.socialContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4em;
  width: 21em;

  .social {
    width: 2em;
    height: 2em;
    margin: 0em 1em;
  }
}

#closeMobile {
  opacity: 1;
}

#closeDesktop {
  opacity: 0;
}

/* mobile first approach */
@media all and (min-width: 1000px) {
  .modalContainer {
    padding-top: 5em;
  }

  img {
    margin-top: 5.8em;
    object-fit: cover;

    height: 32em;
  }

  .nameInfoContainer {
    width: 50%;
    margin: 0;
    padding: 0.8em 1.8em 1.8em 1.8em;
  }
  .socialContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
    .social {
      width: 2em;
      height: 2em;
      margin: 0em 1em;
      position: relative;
    }
  }
  .imageContainer {
    width: 50%;
  }
  .close {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 9.5em;
    right: 24%;
    img {
      height: 30px;
      width: 30px;
      margin-top: 0;
      cursor: pointer;
    }
  }
  #closeDesktop {
    opacity: 1;
  }
  #closeMobile {
    opacity: 0;
  }
}
</style>