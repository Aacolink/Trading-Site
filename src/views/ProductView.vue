<template>
  <div class="viewTop">
    <h2 class="sect-title">{{ category }}</h2>
    <hr />
    <div class="product-background">
      <select
        name="type-select"
        ref="typeSelect"
        id="type-select"
        @change="goToType($event)"
      >
        <option :value="cat" v-for="cat in categories" :key="cat">
          {{ cat }}
        </option>
      </select>
      <div class="product-list" v-if="productList">
        <div
          class="product-type"
          :id="productType.name"
          v-for="productType in productList"
          :key="productType.name"
        >
          <h2 class="category">
            {{ productType.name }}
          </h2>
          <div class="product-container">
            <div
              class="product"
              v-for="item in productType.items"
              :key="item.name"
            >
              <img
                class="product-img"
                :src="getImage(item.img)"
                alt="Product image"
                loading="lazy"
              />
              <div class="product-info">
                <div class="mat-container">
                  <span
                    :class="material"
                    v-for="material in item.material"
                    :key="item.name + material"
                  >
                    {{ material }}
                  </span>
                </div>
                <h4 class="product-name">{{ item.name }}</h4>
                <hr class="divider" />
                <p>Size: {{ item.size }}</p>
                <p>Quantity: {{ item.quantity }}</p>
              </div>
            </div>
          </div>
          <hr
            v-if="!lastCategory(productType.name)"
            class="divider top-down-margin"
          />
        </div>
      </div>
      <div v-else>
        <p>Loading Data...</p>
      </div>
    </div>
    <button type="button" class="up-btn btns" @click="scrollToTop">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
import { onMounted, onUpdated, ref, watch } from "@vue/runtime-core";
import products from "../db.js";
import { scrollToTop } from "../composable/scrollToTop.js";

export default {
  props: ["id"],
  setup(props) {
    const productList = ref(null);
    const typeSelect = ref(null);
    const categories = ref([]);
    const category = ref("");

    watch(
      () => props.id,
      (newId, oldId) => {
        categoryName();
        productList.value = products[newId];
        updateCategories();
      }
    );

    onUpdated(() => {
      // reset select tag index on page change
      typeSelect.value.selectedIndex = 0;
    });

    onMounted(() => {
      productList.value = products[props.id];
      updateCategories();
    });

    function categoryName() {
      switch (props.id) {
        case "eco":
          category.value = "Eco-Friendly";
          break;
        case "coldDrink":
          category.value = "Cold Drink";
          break;
        case "paperCup":
          category.value = "Paper Cup";
          break;
        case "foodContainer":
          category.value = "Food Box";
          break;
        case "DeliContainer":
          category.value = "Deli Container";
          break;
        case "selfLockingContainer":
          category.value = "PET/PLA Self-Locking Container";
          break;
        case "opsFoodContainer":
          category.value = "OPS Food Container";
          break;
        case "soupIceCreamCup":
          category.value = "Soup Cup / Ice Cream Cup";
          break;
        case "hotFoodBowl":
          category.value = "Hot Food Bowl";
          break;
        case "freshTray":
          category.value = "Fresh Tray";
          break;
        default:
          category.value = "Others";
          break;
      }
    }

    function updateCategories() {
      const productTypes = Object.values(productList.value);
      categories.value = [];
      for (let productType of productTypes) {
        categories.value.push(productType.name);
      }
    }

    function getImage(path) {
      try {
        return require(`../assets/pics/${path}`);
      } catch (e) {
        return require(`../assets/no-image.png`);
      }
    }

    function lastCategory(category) {
      return category === categories.value[categories.value.length - 1];
    }

    function goToType(event) {
      window.location.href = `#${event.target.value}`;
    }

    categoryName();

    return {
      productList,
      category,
      getImage,
      lastCategory,
      categories,
      typeSelect,
      goToType,
      scrollToTop,
    };
  },
};
</script>

<style>
.product-list {
  padding: 0 1rem;
}

#type-select {
  display: block;
  margin: 0 auto 3rem auto;
  border-radius: 20px;
  padding: 0.25rem 0.5rem;
  border: 2px solid var(--logo-green);
  font-size: 1.5rem;
}

.category {
  font-size: 1.85rem;
  color: var(--dark-green);
  margin-left: 2rem;
  margin-bottom: 2rem;
}

.product-background {
  padding-top: 2rem;
  padding-bottom: 15rem;
  background-color: #e5e5e5;
}

.product-type {
  scroll-margin-top: 8rem;
}

.product-container {
  display: grid;
  grid-template-columns: auto;
  row-gap: 1.5rem;
  justify-content: center;
  justify-items: center;
}

.product {
  box-shadow: 0 15px 25px rgb(95, 95, 95);
  background-color: var(--dark-gr);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2.5rem;
  border-radius: 5px;
  max-width: 20rem;
}

.product-img {
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 8px;
}

.product-name {
  font-size: 1.3rem;
  color: white;
}

.product-info .divider {
  background-color: white;
  margin-bottom: 20px;
}

.product-info p {
  color: white;
}

.mat-container {
  display: grid;
  grid-auto-flow: column;
  column-gap: 5px;
  justify-content: start;
  margin-top: 15px;
  margin-bottom: 8px;
}

.mat-container span {
  border-radius: 15px;
  padding: 2px 10px 0 10px;
  border-width: 1px;
  border-style: solid;
}

.top-down-margin {
  margin: 3rem 0;
}

.PLA {
  background-color: var(--tag-blue);
  color: var(--tag-blue-text);
}

.PET {
  background-color: var(--tag-red);
  color: var(--tag-red-text);
}

.CPLA {
  background-color: var(--tag-green);
  color: var(--tag-green-text);
}

.PP {
  background-color: var(--tag-purple);
  color: var(--tag-purple-text);
}

.PS {
  background-color: var(--tag-gray);
  color: var(--tag-gray-text);
}

.PAPER {
  background-color: var(--tag-yellow);
  color: var(--tag-yellow-text);
}

.OPS {
  background-color: var(--tag-light-blue);
  color: var(--tag-light-blue-text);
}

.up-btn {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid var(--ex-dark-gr);
  background-color: white;
  opacity: 70%;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 99999999;
}

.fa-arrow-up {
  font-size: 2rem;
}

@media screen and (min-width: 768px) {
  .product-container {
    grid-template-columns: repeat(2, auto);
    gap: 40px;
  }
}

@media screen and (min-width: 1024px) {
  .product-container {
    grid-template-columns: repeat(3, auto);
    gap: 30px;
  }

  #type-select {
    font-size: 1.1rem;
  }
}

@media screen and (min-width: 1200px) {
  .product-container {
    grid-template-columns: repeat(4, auto);
    gap: 20px;
  }
}

@media screen and (min-width: 1700px) {
  .product-container {
    gap: 50px;
  }
}
</style> 