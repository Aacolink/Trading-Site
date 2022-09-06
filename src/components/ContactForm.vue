<template>
  <form id="contact-form" ref="contactForm" @submit.prevent="handleSubmit">
    <p id="contact-short-msg">
      We'd love to hear from you! Leave a message below and we will get in touch
      with you soon.
    </p>
    <label
      >Name<span>*</span>
      <input
        type="text"
        v-model.trim="userInput.username"
        name="username"
        required
      />
    </label>
    <label
      >Business<span>*</span>
      <input
        type="text"
        v-model.trim="userInput.business"
        name="business"
        required
      />
    </label>
    <label
      >Email<span>*</span>
      <input
        type="email"
        v-model.trim="userInput.email"
        name="email"
        required
      />
    </label>
    <label
      >Phone
      <input type="number" v-model.trim="userInput.phone" name="phone" />
    </label>
    <label
      >Industry<span>*</span>
      <select v-model.trim="userInput.industry" name="industry" required>
        <option value="none" selected disabled>Select Your Industry*</option>
        <option value="Accommodation and Food Services">
          Accommodation and Food Services
        </option>
        <option value="Agriculture, Forestry, Fishing and Hunting">
          Agriculture, Forestry, Fishing and Hunting
        </option>
        <option value="Arts, Entertainment and Recreation">
          Arts, Entertainment and Recreation
        </option>
        <option value="Construction">Construction</option>
        <option value="Educational Services">Educational Services</option>
        <option value="Finance and Insurance">Finance and Insurance</option>
        <option value="Healthcare and Social Assistance">
          Healthcare and Social Assistance
        </option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Retail Trade">Retail Trade</option>
        <option value="Transportation and Warehousing">
          Transportation and Warehousing
        </option>
        <option value="Wholesale Trade">Wholesale Trade</option>
        <option value="Other">Other</option>
      </select>
    </label>
    <label
      >Message
      <textarea
        v-model.trim="userInput.message"
        name="message"
        rows="5"
        placeholder="How can we help?"
      ></textarea>
    </label>
    <button id="submit-btn" type="submit" :disabled="disableBtn">
      Send Message
    </button>
    <p :class="`submit-status submitting ${isSending}`" v-if="status === 0">
      Sending...
    </p>
    <p class="submit-status submit-success" v-if="status === 1">
      Successfully Sent!
    </p>
    <p class="submit-status submit-failed" v-if="status === -1">
      Something's wrong! Please try again.
    </p>
    <hr />
    <h3>Contact Email:</h3>
    <div class="contact-info">
      <i class="fa-solid fa-envelope"></i>
      <p>trading@aacolink.com</p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userInput: {
        username: "",
        business: "",
        email: "",
        phone: "",
        industry: "none",
        message: "",
      },
      status: 0,
      sending: false,
      disableBtn: false,
    };
  },
  computed: {
    isSending() {
      return this.sending ? "sending" : "";
    },
  },
  mounted() {
    emailjs.init("B17qsXr5wz0JGdzFF");
  },
  methods: {
    handleSubmit() {
      // check for empty fields
      if (
        this.userInput.username.length === 0 ||
        this.userInput.business.length === 0 ||
        this.userInput.email.length === 0 ||
        this.userInput.industry === "none"
      ) {
        this.status = -1;
        this.resetSubmitStatus();
        return;
      }

      this.sending = true;
      this.disableBtn = true;
      this.submitData();
    },
    resetSubmitStatus() {
      setTimeout(() => {
        this.status = 0;
        this.sending = false;
        this.disableBtn = false;
      }, 3000);
    },
    submitData() {
      emailjs
        .sendForm(
          "aacolink_tr_contact",
          "aacolink_tr_contact_form",
          this.$refs.contactForm
        )
        .then(
          (res) => {
            this.status = 1;

            // reset form fields
            for (let input in this.userInput) {
              this.userInput[input] = "";
            }
            this.userInput.industry = "none";
            this.resetSubmitStatus();
          },
          (err) => {
            this.status = -1;
            this.resetSubmitStatus();
          }
        );
    },
  },
};
</script>

<style>
#contact-form {
  display: grid;
  row-gap: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  max-width: 28rem;
  padding: 0 2rem 2rem 2rem;
}

#contact-short-msg {
  padding: 2rem 0 1rem 0;
}

#contact-form input,
#contact-form select,
#contact-form textarea {
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #b6b6b6;
}

#contact-form select {
  padding: 0.5rem;
}

#contact-form label > span {
  color: #ff0000;
}

#submit-btn {
  border: none;
  border-radius: 5px;
  padding: 0.7rem 0.5rem 0.5rem 0.5rem;
  background-color: var(--mid-gr);
  color: #ffffff;
}

.submit-status {
  padding: 0;
  text-align: center;
  color: transparent;
}

.sending {
  color: gray;
}

.submit-success {
  color: var(--logo-green);
}

.submit-failed {
  color: red;
}

#contact-form hr {
  margin-bottom: 1.5rem;
  border: none;
  background-color: #b6b6b6;
  width: 100%;
  height: 1px;
}

.contact-info {
  display: flex;
  align-items: center;
}

.contact-info p {
  margin-left: 1rem;
}
</style>