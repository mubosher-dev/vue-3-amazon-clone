<template>
  <Navbar />
  <div class="basket__header">
    <img
      src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
      alt=""
    />
    <div v-if="basket.length > 0" class="basket__form">
      <div>
        <h3>
          Subtotal ({{ basket.length }} items) : <span>${{ totalPrice }} </span>
        </h3>
      </div>
      <div>
        <input type="checkbox" />
        <p>This order contains a gift</p>
      </div>
      <button class="basketBtn">Proced Checkout</button>
    </div>
    <div v-else class="basket__form">
      <h3 class="sorry">Sorry please come in home and buy the product</h3>
    </div>
  </div>
  <div class="busket__box">
    <BasketProduct
      v-if="basket.length > 0"
      v-for:="baskets in basket"
      v-bind:key="baskets.id"
      :imgUrl="baskets.imgUrl"
      :rating="baskets.rating"
      :desc="baskets.description"
      :price="baskets.price"
      :id="baskets.id"
    />
    <div v-else></div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BasketProduct from "../components/BasketProduct.vue";
import { mapState } from "vuex";


export default {
  components: {
    Navbar,
    BasketProduct,
  },
  computed: {
    ...mapState(["basket", "totalPrice"]),
  },
};
</script>

<style>
.basket__header {
  display: flex;
  align-items: center;
  height: 200px;
}

.basket__header img {
  width: 70%;
  height: 200px;
  object-fit: cover;
}
.basket__form {
  width: 30%;
  background: #a39e9e;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.basket__form h3 {
  font-weight: 500;
}

.basket__form h3 span {
  font-weight: bold;
  font-size: 18px;
}

.basket__form div:nth-child(2) {
  display: flex;
  align-items: center;
}

.basketBtn {
  padding: 2px;
  background: rgb(187, 193, 75);
  font-size: 14px;
  margin: 10px auto;
  display: block;
  outline: none;
  cursor: pointer;
  border: 1px solid #000;
}

.sorry {
  color: red;
  text-align: center;
}

@media screen and (max-width:768px) {
  .basket__header{
    flex-direction: column-reverse;
    margin-top:30% ;
    padding: 1rem;
  }
  .basket__header > div ,img {
    width:100% !important;
    margin: 5px 0;
  }
  .busket__box{
    padding: 1rem;
  }
}
</style>
