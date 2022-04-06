<template>
  <div class="productMenu">
    <div class="product__desc">
      <p>{{ productDescription }}</p>
      <span>
        <i
          v-for:="(star, index) in rating"
          v-bind:key="index"
          class="fa-solid fa-star yellow"
        ></i>
      </span>
    </div>
    <div class="product__price">
      $<span>{{ price }}</span>
    </div>
    <img :src="productImg" class="productImg" alt="" />
    <div>
      <button @click="addToBusket(this.productData)" class="addProduct">Add to busket</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    rating: {
      type: Number,
      require: true,
    },
    productImg: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    price: {
      type: Number,
    },
    id: {
      type: Number,
    },
  },
  data(){
      return{
          productData:{}
      }
  },
  methods:{
      productAdd(){
          this.productData = {
              id:this.id,
              price:this.price,
              desc:this.productDescription,
              rating:this.rating,
              imgUrl:this.productImg
          }
          console.log(this.productData)
      },
      ...mapMutations(["addToBusket"])
  },
  mounted(){
      this.productAdd()
  }
};
</script>

<style>
.productMenu {
  width: 100%;
  background: white;
  padding: 10px;
  margin: 10px;
  min-height: 430px;
  max-height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.productMenu:hover {
  box-shadow: 0 0 10px 10px rgba(74, 44, 74, 0.2);
}

.productImg {
  width: 200px;
  max-height: 200px;
  min-height: 200px;
  object-fit: contain;
  display: block;
  margin: 10px auto;
}

.product__price {
  font-size: 16px;
  color: #000;
  font-weight: bold;
}

.yellow {
  color: rgb(214, 244, 63);
}
.addProduct {
  padding: 2px;
  background: rgb(187, 193, 75);
  font-size: 14px;
  margin: 10px auto;
  display: block;
  outline: none;
  cursor: pointer;
  border: 1px solid #000;
}

@media screen and (max-width:768px){
  .productMenu {
    max-height: 470px;
  }
}
</style>
