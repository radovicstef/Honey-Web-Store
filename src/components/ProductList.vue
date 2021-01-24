<template lang="html">

  <section class="product-list">
    <section class="productList">
    <div class='red'>
      <div class='container' v-for='p in products'>
        <product :product='p'/>
      </div>
    </div>
  </section>
  </section>

</template>

<script lang="js">
  import product from './Product.vue';

  export default  {
    name: 'product-list',
    components: {
      product
    },
    props: [],
    mounted () {
      this.products = JSON.parse(localStorage.getItem('proizvodi'));
    },
    data () {
      return {
        products: []
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style>
  .row{
    position: absolute;
    top: 25%;
    margin-left: 30%;
  }
  .col-sm-5{
    padding-bottom: 300px;
  }
  .container{
    justify-content: center;
    margin-bottom: 30%;
    width: 1200px;
    margin-left: 20%;
  }
  .red{
    justify-content: center;
    position: absolute;
    height: 1000px;
    padding: 100px;
  }
</style>
