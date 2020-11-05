<template>
  <div class="contact-container">
    <div class="contact-info">
      <h1>Contact</h1>
      <p>
        Before you contact us we would be happy if you first look in the FAQ and
        look for your answer there.
        <br />
        <br />
        Contact us in the form or send an email to info@uxrocks.com. We will get
        back to you as soon as we can.
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
      press@uxrocks.se
    </p>
  </div>
</template>

<script>
import Input from '@/components/InputField'
import PrimaryBtn from '@/components/PrimaryBtn'
export default {
  components: {
    Input,
    PrimaryBtn,
  },
}
</script>

<style lang="scss" scoped>
.contact-info {
  h1 {
    color: $white;
  }
  p {
    padding: $padding-p;
  }
}
.contact-button,
.press-info {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.press-info {
  margin-bottom: $margin-v-section;
}
</style>
