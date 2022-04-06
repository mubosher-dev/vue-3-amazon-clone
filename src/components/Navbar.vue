<template>
  <div class="navbar">
    <div class="header__left">
      <router-link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
          class="logo__img"
        />
      </router-link>
      <div class="header__form">
        <input type="text" />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <div class="header__right">
      <div class="header_box">
        <span> Hello user@gmail.com </span>
        <a> <span class="bold"> Sign Out </span> </a>
      </div>
      <div class="header_box">
        <span> Orders </span>
        <span class="bold"> Retutns </span>
      </div>
      <div class="header_box">
        <span> Your prime</span>
        <span class="bold"> Prime </span>
      </div>
      <div class="header_box busket">
        <router-link to="/basket">
          <i class="fa-solid fa-basket-shopping"></i>
          <span v-if="basket.length > 0" class="productBusket">
            {{ basket.length }}
          </span>
          <span v-else class="productBusket"> 0 </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["basket", "user"]),
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  background-color: rgb(19, 25, 33);
  padding: 10px;
  width: 100%;
  left: 0;
  right: 0;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1000;
}

.header__left {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 0.8;
}
.logo__img {
  width: 100px;
  object-fit: contain;
  margin-top: 10px;
  margin-right: 10px;
  vertical-align: middle;
}
.header__form {
  display: flex;
  flex: 1;
  background: #f5f5f5;
  align-items: center;
}

.header__form input {
  width: 100%;
  border: none;
  background: none;
  font-size: 16px;
  outline: none;
  padding: 10px 15px;
}

.header__form button {
  border: none;
  outline: none;
  padding: 10px 15px;
  font-size: 16px;
  background-color: rgb(205, 144, 66);
}

.header__right {
  display: flex;
  flex: 0.5;
  justify-content: space-evenly;
}
.header_box {
  display: flex;
  flex-direction: column;
  color: #fff;
  flex: 1;
}

.header_box a,
span {
  font-size: 13px;
}

.header_box span.bold {
  font-size: 16px;
  font-weight: bold;
}

.header_box i {
  font-size: 17px;
  cursor: pointer;
}

.header_box.busket a {
  display: flex;
  padding-top: 10px;
}

.header_box a .productBusket {
  transform: translateY(8px);
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .header__form {
    display: none;
  }
  .header__left {
    flex: 0.2;
  }
  .header__right {
    flex: 1;
    justify-content: space-around;
  }
  .header__right .header_box{
      margin-left: 3px;
  }
  .header_box span.bold {
    font-size: 12px;
    font-weight: bold;
  }
  .header_box a,
  span {
    font-size: 10px;
  }
}
</style>
