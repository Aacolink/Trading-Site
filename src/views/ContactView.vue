<template>
  <div class="viewTop">
    <h2 class="sect-title">Contact Us</h2>
    <hr />
    <div class="contact-background">
      <div class="contact-form-container">
        <ContactForm />
        <div class="explore-prompt">
          <h3>How we can work for you.</h3>
          <ul>
            <li>
              <p>
                <i class="fa-solid fa-check"></i>
                Dedicated support to work with you any step of the way,
                prioritizing helping you acheive your goal.
              </p>
            </li>
            <hr class="divider" />
            <li>
              <p>
                <i class="fa-solid fa-check"></i>
                Flexible service perfect for small to medium size businesses,
                meeting your needs 24/7.
              </p>
            </li>
            <hr class="divider" />
            <li>
              <p>
                <i class="fa-solid fa-check"></i>
                True international connection to bring your products across
                every corner of the world.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  components: { ContactForm },
};
</script>

<style>
.contact-background {
  transform: skewY(3deg);
  background-color: var(--dark-gr);
  padding-top: 2rem;
  padding-bottom: 15rem;
}

.contact-form-container {
  transform: skewY(-3deg);
  display: grid;
  grid-template-columns: auto;
  row-gap: 2rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 0 1rem;
}

.explore-prompt {
  background-color: var(--gray);
  padding: 2rem 2rem;
  margin: 0 1rem;
  border-radius: 10px;
  line-height: 2rem;
  max-width: 28rem;
}

.explore-prompt h3 {
  color: var(--mid-gr);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.explore-prompt ul {
  list-style: none;
  display: grid;
  row-gap: 1rem;
}

.explore-prompt ul li p {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
}

@media screen and (min-width: 1024px) {
  .contact-form-container {
    grid-template-columns: auto auto;
    column-gap: 1rem;
  }
}

@media screen and (min-width: 1200px) {
  .contact-form-container {
    column-gap: 10rem;
  }
}

@media screen and (min-width: 1700px) {
  .contact-form-container {
    column-gap: 15rem;
  }
}
</style>