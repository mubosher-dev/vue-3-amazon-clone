<template>
  <div class="basketProduct">
    <div class="basket__img">
      <img :src="imgUrl" />
    </div>
    <div class="basket__productCaption">
      <h3>{{ desc }}</h3>
      <span class="product__price"> ${{ price }} </span>
      <div>
        <span>
          <i
            v-for:="(star, index) in rating"
            v-bind:key="index"
            class="fa-solid fa-star yellow"
          ></i>
        </span>
      </div>
      <div>
        <button @click="removeToBusket(this.id)" class="removeBtn">
          Remove To Busket
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    imgUrl: {
      type: String,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    id: {
      type: Number,
    },
  },
  methods:{
      ...mapMutations(['removeToBusket']),
  },
};
</script>

<style scoped>
.basketProduct {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 2rem;
  margin: 10px auto;
  justify-content: space-between;
  width: 80%;
}

.basket__img img {
  width: 250px;
}

.basket__productCaption {
  margin: 0 10px;
}

.basket__productCaption h3 {
  font-weight: 600;
}

.product__price {
  font-size: 16px;
  font-weight: 800;
}

.removeBtn {
  padding: 2px;
  background: rgb(187, 193, 75);
  font-size: 14px;
  margin: 15px auto;
  outline: none;
  cursor: pointer;
  border: 1px solid #000;
}
.yellow {
  color: rgb(214, 244, 63);
}

@media screen and (max-width:768px){
    .basketProduct{
        flex-direction: column;
        width: 100%;
    }
}
</style>
