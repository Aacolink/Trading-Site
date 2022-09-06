<template>
  <nav>
    <img
      id="logo"
      @click="goToHome"
      src="./assets/aacolink-green-trans-275.png"
      alt="Logo"
      srcset="
        ./assets/aacolink-green-trans-275.png 275w,
        ./assets/aacolink-green-trans-315.png 315w
      "
    />
    <button
      v-if="isMobileView"
      @click="burgerClick"
      type="button"
      aria-label="Menu button"
      class="btns"
      id="burger"
    >
      <svg
        fill="#FFFFFF"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path
          d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
        />
      </svg>
    </button>
    <div id="menu">
      <div id="menu-items">
        <router-link to="/" class="menu-item" @click="scrollToTop"
          >Home</router-link
        >
        <div class="dropdown-menu">
          <a href="#" class="menu-item" @click.prevent="clickProducts"
            >Products</a
          >
          <div ref="dropdown_content" class="dropdown-content">
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'eco' } }"
              >Eco-Friendly</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'coldDrink' } }"
              >Cold Drink</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'paperCup' } }"
              >Paper Cup</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'foodContainer' } }"
              >Food Container</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'DeliContainer' } }"
              >Deli Container</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'selfLockingContainer' } }"
              >Self-Locking Container</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'opsFoodContainer' } }"
              >OPS Food Container</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'soupIceCreamCup' } }"
              >Soup / Ice Cream Cup</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'hotFoodBowl' } }"
              >Hot Food Bowl</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'freshTray' } }"
              >Fresh Tray</router-link
            >
            <router-link
              class="dropdown-item"
              @click="scrollToTop"
              :to="{ name: 'products', params: { id: 'other' } }"
              >Others</router-link
            >
          </div>
        </div>
        <router-link to="/contact" class="menu-item" @click="scrollToTop"
          >Contact</router-link
        >
      </div>
    </div>
  </nav>
  <router-view />
  <footer>
    <div id="footer-links">
      <router-link to="/" @click="scrollToTop">Home</router-link>
      &#8226;
      <router-link
        :to="{ name: 'products', params: { id: 'eco' } }"
        @click="scrollToTop"
        >Products</router-link
      >
      &#8226;
      <router-link to="/contact" @click="scrollToTop">Contact</router-link>
    </div>
    <small ref="copyright"></small>
  </footer>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { scrollToTop } from "./composable/scrollToTop.js";

export default {
  name: "App",
  setup() {
    const screenWidth = ref(window.screen.width);
    const dropdown_content = ref(null);
    const copyright = ref(null);
    const route = useRoute();
    const router = useRouter();

    const isMobileView = computed(() => {
      decideInitialMenuItemColor();
      return screenWidth.value < 1024;
    });

    onMounted(() => {
      window.addEventListener("resize", () => {
        screenWidth.value = window.screen.width;
      });
      closeDP();
      scrollNav();
      setCopyright();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        screenWidth.value = window.screen.width;
      });
    });

    function setCopyright() {
      const currYear = new Date().getFullYear();
      copyright.value.innerHTML = `Copyright &copy; ${currYear} Aacolink. All Rights Reserved`;
    }

    function decideInitialMenuItemColor() {
      if (screenWidth.value < 1024 || (route.name && route.name !== "home")) {
        changeMenuItemColor("black");
      } else {
        changeMenuItemColor("white");
      }
    }

    function closeDP() {
      const menuLinks = document.querySelectorAll(".menu-item");
      const dpLinks = document.querySelectorAll(".dropdown-item");

      menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", () => {
          if (menuLink.textContent !== "Products") {
            burgerClick();
          }
        });
      });

      dpLinks.forEach((dpLink) => {
        dpLink.addEventListener("click", () => {
          burgerClick();
        });
      });
    }

    function scrollNav() {
      window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
          document.querySelector("nav").style = "";

          const pathName = window.location.pathname;
          if (window.screen.width >= 1024 && pathName.length === 1) {
            changeMenuItemColor("white");
          }
        } else {
          const whiteBackground = "background: white;";
          const boxShadow = "box-shadow: 0 2px 5px gray";
          document.querySelector("nav").style = whiteBackground + boxShadow;
          if (window.screen.width >= 1024) {
            changeMenuItemColor("black");
          }
        }
      });
    }

    function changeMenuItemColor(color) {
      const menuItems = document.querySelectorAll(".menu-item");
      menuItems.forEach((menuItem) => {
        menuItem.style = `color: ${color}`;
      });
    }

    // methods:
    function burgerClick() {
      if (screenWidth.value < 1024) {
        const menuElement = document.getElementById("menu");
        const dpContentElement = document.querySelector(".dropdown-content");
        const burgerElement = document.getElementById("burger");
        const dpShowContent = "dropdown-content-show-mobile";
        const stackImg =
          '<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"> <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" /> </svg>';
        const crossImg =
          '<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" /></svg>';

        if (menuElement.classList.contains("dropdown")) {
          menuElement.classList.remove("dropdown");
          burgerElement.innerHTML = stackImg;
        } else {
          menuElement.classList.add("dropdown");
          burgerElement.innerHTML = crossImg;
        }
      }
    }

    function clickProducts() {
      if (screenWidth.value < 1024) {
        const dpContentRef = dropdown_content.value;
        const dpShowCSS = "dropdown-content-show-mobile";

        if (dpContentRef.classList.contains(dpShowCSS)) {
          dpContentRef.classList.remove(dpShowCSS);
        } else {
          dpContentRef.classList.add(dpShowCSS);
        }
      }
    }

    function goToHome() {
      router.push({ name: "home" });
      scrollToTop();
    }

    return {
      screenWidth,
      isMobileView,
      copyright,
      burgerClick,
      clickProducts,
      dropdown_content,
      goToHome,
      scrollToTop,
    };
  },
};
</script>

<style>
@import "./all.css";

#logo {
  width: 200px;
  height: 70.47px;
}

#logo:hover {
  cursor: pointer;
}

#burger {
  z-index: 100;
  border: none;
  background-color: var(--logo-green);
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

nav {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  transition: all 0.2s ease-out;
  padding: 0.5rem 2rem 0.5rem 0.5rem;
  background-color: transparent;
}

#menu {
  position: fixed;
  transform: translateY(-100%);
  transition: transform 0.2s;
  background-color: #ffffff;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  list-style: none;
  padding: 1.5rem 1.5rem;
  overflow: auto;
}

#menu-items {
  display: grid;
  row-gap: 2rem;
  align-items: center;
  width: 80%;
}

.menu-item {
  display: block;
  border: none;
  border-bottom: 1px solid var(--logo-green);
  padding-bottom: 5px;
}

.dropdown {
  transform: translateY(0%) !important;
}

.dropdown-menu {
  position: relative;
}

.dropdown-content {
  display: none;
  padding: 1rem 1rem;
}

.dropdown-content-show-mobile {
  display: grid;
  grid-template-columns: auto;
  row-gap: 1.2rem;
}

.dropdown-item {
  padding: 10px;
}

footer {
  text-align: center;
  display: grid;
  row-gap: 1rem;
  padding: 3rem 0 1rem 0;
  background-color: #333333;
  transform: skew(0);
  margin-top: -5rem;
}

footer a,
footer small,
footer router-link,
#footer-links {
  color: white;
}

#footer-links {
  display: grid;
  row-gap: 0.1rem;
}

@media screen and (min-width: 768px) {
  nav {
    padding-left: 2rem;
  }

  #logo {
    width: 230px;
    height: 81.05px;
  }
}

@media screen and (min-width: 1024px) {
  #menu {
    position: relative;
    transform: translateY(0);
    height: unset;
    box-shadow: none;
    background-color: transparent;
    overflow: initial;
  }

  #menu-items {
    grid-auto-flow: column;
    column-gap: 1rem;
    padding: 0;
  }

  .menu-item {
    display: initial;
    border-bottom: none;
    padding-bottom: 0;
  }

  .dropdown-content {
    background-color: var(--ex-dark-gr);
    border-radius: 10px;
    left: -45rem;
    position: absolute;
    z-index: 1000;
  }

  .dropdown-item {
    color: white;
  }

  .dropdown-menu:hover .dropdown-content {
    display: grid;
    grid-template-columns: repeat(4, 13rem);
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 1200px) {
}
</style>
