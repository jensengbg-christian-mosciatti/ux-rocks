<template>
  <div class="contact-container">
    <div class="contact-info">
      <h1>Contact</h1>
      <p>
        Before you contact us we would be happy if you first look through our
        <router-link to="/faq">FAQ</router-link>'s and look for your answer
        there.
        <br />
        <br />
        Contact us in the form or send an email to
        <a href="/">info@uxrocks.com</a>
        <br />
        We will get back to you as soon as we can.
      </p>
    </div>
    <div class="input-container">
      <Input label="Name" />
      <Input label="Email" />
      <Input label="Message" multiline />
    </div>
    <div class="contact-button">
      <PrimaryBtn @click="$router.go(n)" title="SEND MESSAGE" />
    </div>
    <p class="press-info">
      For press questions email to:
      <br />
      <a href="/">press@uxrocks.se</a>
    </p>
  </div>
</template>

<script>
import Input from '@/components/InputField'
import PrimaryBtn from '@/components/PrimaryBtn'

export default {
  name: 'Contact',
  components: {
    Input,
    PrimaryBtn,
  },
}
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contact-info {
  text-align: center;
  h1 {
    color: $white;
    margin: 50px;
  }
  p {
    padding: $padding-p;
  }
}

.press-info {
  margin-bottom: $margin-v-section;
  text-align: center;
}

.input-container {
  max-width: 35em;
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

a {
  position: relative;
  font-family: inherit;
  font-size: inherit;
}
@media only screen and (max-width: 500px) {
  .contact-container {
    max-width: 30em;
  }
}
</style>
