<template>
  <div id="home">
    <div id="hero">
      <div id="hero-content-container">
        <!-- <h1>
          Simplify your process of trading and bring your product worldwide
        </h1> -->
        <h1>
          <span class="keyword">Simpliticy </span> and true international
          <span class="hero-title keyword">connection </span> is here
        </h1>
        <p>
          Aacolink streamlines your trading pipeline and handles your cross
          border trading concerns so you can focus on your products, bringing it
          to the international stage.
        </p>
        <a href="#contact" class="btns" id="contact-btn">Contact Us</a>
      </div>
    </div>
    <section class="sect" id="mission-container">
      <div id="mission">
        <h2 class="sect-title">Our Mission</h2>
        <hr />
        <p id="mission-text">
          To be Globally recognized import - export company that put quality,
          service, and value as priority to satisfy the needs of our customers,
          employees and stakeholders. Mission:
          <span class="gr-text"
            >To offer our customers products with superior quality and
            value.</span
          >
          Helping Businesses Grow By Encouragement, Strategies, Mentoring &amp;
          Leadership Development. Strengthen Businesses To Become Healthy &amp;
          Effective.
          <br />
          <br />
          A unified company committed to creating trust, understanding and
          well-being among its members by fully utilizing their diversities and
          talents. Discover our dream of creating a better world for doing
          <span class="gr-text">business cross border</span> with our mission to
          overcome the boundaries of doing business international. Get
          introduced to the right people, and connect with potential business
          partners and clients by participating in a trade mission or event.
          <br />
          <br />
          The mission of Aacolink Corporation is to be the
          <span class="gr-text"
            >trusted global provider of reliable and manufacturing services and
            innovative solutions</span
          >
          to US companies using advanced technology developed and reliable
          quality through close collaboration with our customers and other
          supply chain partners. Establish the stable and long term cross
          boarder partnership as a family team.
        </p>
      </div>
    </section>
    <section class="sect" id="product-banner-container">
      <div id="product-banner">
        <h2 class="sect-title">
          Quality products derived from credible and reliable sources
        </h2>
        <p>
          Aacolink strive for providing high quality products across states and
          nations, building the bridge between your business and the world,
          creating long lasting business relationships while helping you acheive
          your goal.
        </p>
        <router-link
          id="exploreBtn"
          class="btns"
          @click="scrollToTop"
          :to="{ name: 'products', params: { id: 'eco' } }"
          >Explore Our Products</router-link
        >
      </div>
    </section>
    <section class="sect" id="contact-container">
      <div id="contact">
        <h2 class="sect-title">Contact Us</h2>
        <hr />
        <div id="contact-content">
          <ContactForm />
          <div id="img-container">
            <img
              src="../assets/contact-img-vert.jpg"
              alt="Photo of people holding hands"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
import { scrollToTop } from "../composable/scrollToTop.js";

export default {
  name: "HomeView",
  components: { ContactForm },
  setup() {
    return { scrollToTop };
  },
};
</script>

<style>
#hero {
  text-align: center;
  padding: 13rem 0;
}

#hero:before {
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5)),
    url("@/assets/trading-home-img-mobile.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  background-size: cover;
}

#hero-content-container {
  max-width: 28rem;
  margin: 0 auto;
}

#hero-content-container h1 {
  font-size: 3rem;
  line-height: 3.5rem;
  color: white;
  font-weight: bold;
}

#hero-content-container p {
  color: white;
  font-family: "Poppins-light", sans-serif;
  margin-top: 1.5rem;
}

#contact-btn,
#exploreBtn {
  display: inline-block;
  background-color: var(--logo-green);
  color: #ffffff;
  margin-top: 5rem;
  padding: 1rem 1.5rem 0.8rem 1.5rem;
  border-radius: 5px;
}

#mission-container,
#contact-container {
  transform: skewY(5deg);
  margin-top: -5rem;
}

#mission,
#contact {
  transform: skewY(-5deg);
}

#mission-container {
  background-color: white;
}

#mission-text {
  background-color: var(--gray);
  padding: 2rem 1rem;
  margin: 0 1rem;
  border-radius: 10px;
  line-height: 2rem;
}

.keyword {
  color: var(--light-gr);
  font: inherit;
}

.gr-text {
  color: var(--mid-gr);
}

#product-banner-container {
  transform: skewY(-5deg);
  margin-top: -5rem;
  background-color: var(--mid-gr);
}

#product-banner {
  transform: skewY(5deg);
  margin: 0 2rem;
}

#product-banner h2 {
  text-align: left;
  color: white;
}

#product-banner p {
  color: white;
  margin-top: 2rem;
}

#exploreBtn {
  margin-top: 2rem;
  background-color: var(--ex-dark-gr);
}

#contact-container {
  background-color: var(--dark-gr);
  padding-left: 1rem;
  padding-right: 1rem;
}

#contact {
  scroll-margin-top: 8rem;
}

#contact .sect-title {
  color: white;
}

#contact-content {
  display: grid;
  align-items: center;
  justify-items: center;
}

#img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 20px;
  margin: 3.5rem auto 0 auto;
  width: 20rem;
}

@media screen and (min-width: 768px) {
  #mission-text {
    margin: 0 3rem;
  }

  #product-banner {
    margin: 0 4rem;
  }
}

@media screen and (min-width: 1024px) {
  #hero::before {
    background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5)),
      url("@/assets/trading-home-img-lg.jpg");
  }

  #mission-container {
    padding-bottom: 15rem;
  }

  #product-banner-container {
    margin-top: -8rem;
    padding-top: 8rem;
    padding-bottom: 15rem;
  }

  #contact-container {
    margin-top: -8rem;
  }

  #contact-content {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }

  #contact-content > #img-container {
    width: 30rem;
  }
}

@media screen and (min-width: 1700px) {
  #hero-content-container {
    max-width: 30rem;
  }

  #hero-content-container h1 {
    font-size: 3.5rem;
    line-height: 4.25rem;
  }

  #hero-content-container p,
  #contact-btn {
    font-size: 1.25rem;
  }

  #mission-container {
    padding-bottom: 20rem;
  }

  #product-banner-container {
    margin-top: -12rem;
    padding-bottom: 25rem;
  }

  #contact-container {
    margin-top: -17rem;
  }

  #mission-text {
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
  }

  #product-banner {
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
  }
}

@media screen and (min-width: 2000px) {
  #contact-container {
    padding-bottom: 15rem;
  }

  #contact-content > #img-container {
    width: 35rem;
  }
}
</style>
