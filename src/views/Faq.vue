<template>

    <div class="faq-container">
      <h1>FAQ</h1>

      <div class="question-container">
        <p class="question">Is UX Rocks 2020 cancelled?</p>
        <p>
          Yes. Due to the current situation and restriction we do not want to take
          any risks or expose anyone to risk.
        </p>
        <br />
        <p class="question">Are my tickets valid for next year?</p>
        <p>
          Yes! If you bought a ticket for 2020 the ticket is valid for UX Rocks
          2021 instead. We want you to come rock with us next year.
        </p>
        <br />
        <p class="question">When will UX rocks take place in 2021?</p>
        <p>
          It will take place on September 2-4 in Karlskrona.
        </p>
        <br />
        <p class="question">Is there any age limit at UX Rocks?</p>
        <p>
          Yes. There is a strict age limit of 18+ with no exceptions.
        </p>
        <br />
        <p class="question">Can you buy alcohol and food at the festival?</p>
        <p>
          Yes. We have 10 different food-trucks and an alcohol drinking area.
        </p>
        <br />
        <p class="question">
          For other questions, you are welcome to contact our customer service via
          info@uxrocks.com
        </p>
      </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: $white;
    margin: 50px;
  }

  .question-container {
    padding: $padding-p;
    max-width: 50em;
    text-align: start;
    .question {
      color: $gold;
      font-weight: bold;
    }
  }
}
</style>
