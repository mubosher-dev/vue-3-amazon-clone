<template>
  <Navbar />
  <div class="home">
    <div class="home__banner">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
    </div>
    <div class="home__product">
      <div class="home__productDisplay">
        <ProductItem
          :productImg="'https://m.media-amazon.com/images/I/71Ede4YMO+L._AC_SX679_.jpg'"
          :productDescription="'Dell S3222HN 32-inch FHD 1920 x 1080 at 75Hz Curved Monitor, 1800R Curvature, 8ms Grey-to-Grey Response Time (Normal Mode)'"
          :rating="5"
          :id="1"
          :price="802"
        />
        <ProductItem
          :productImg="'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'"
          :productDescription="'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'"
          :rating="4"
          :id="2"
          :price="355"
        />
      </div>
      <div class="home__productDisplay">
        <ProductItem
          :productImg="'https://m.media-amazon.com/images/I/919xvhsM0BS._AC_SX425_.jpg'"
          :productDescription="'ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop, 15.6” 144Hz FHD, GeForce RTX 3050 Ti, Intel Core i7-11370H'"
          :rating="5"
          :id="3"
          :price="897"
        />
        <ProductItem
          :productImg="'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'"
          :productDescription="'Dell S3222HN 32-inch FHD 1920 x 1080 at 75Hz Curved Monitor, 1800R Curvature, 8ms Grey-to-Grey Response Time (Normal Mode)'"
          :rating="3"
          :id="4"
          :price="878"
        />
        <ProductItem
          :productImg="'https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg'"
          :productDescription="'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400))'"
          :rating="5"
          :id="5"
          :price="325"
        />
      </div>
      <div class="home__productDisplay">
        <ProductItem
          :productImg="'https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg'"
          :productDescription="'Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)'"
          :rating="5"
          :id="6"
          :price="1425"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ProductItem from "../components/ProductItem.vue";

document.title = "Amazon Home";

export default {
  components: {
    Navbar,
    ProductItem,
  },
};
</script>

<style>
.home {
  width: 90%;
  margin: auto;
  padding: 1rem;
}
.home__banner {
  margin: 0 auto;
  max-height: 80vh;
  margin-top: -30px;
  z-index: -1;
  position: relative;
}
.home__banner img {
  width: 100%;
  object-fit: contain;
  mask-image: linear-gradient(0deg, #f5f5f5, #333);
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.4)
  );
}

.home__product {
  margin-top: -89px;
  position: relative;
  z-index: 100;
}

.home__productDisplay {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .home {
    width: 100%;
  }
  .home__banner {
    max-height: 100vh;
  }
  .home__productDisplay {
    flex-direction: column;
  }
}
</style>
