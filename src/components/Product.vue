<template lang="html">

  <section class="product">
    <div class='card'>
      <div class='card-content'>
        <div>
          <img src="../assets/logo1.png" width="25%">
        </div>

        <br>

        <div class='picture'>
          <img :src='/img/+product.slika' width="50%">
        </div>

        <br>

        <div class='productInfo'>
          <div class='information'>
            <div class='productName'>
              <span><h2>{{product.naziv}}</h2></span>
            </div>
            <span><h3>{{product.proizvodjac}}</h3></span>
            <span><h3 id="price">RSD {{product.cena}}</h3></span>
          </div>

          <router-link :to='/productdetails/ + product.id'>
            <div class='detail'>
                <h2>+</h2>
            </div>
          </router-link>

        </div>
        
        
        
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'product',
    props: [
      'product'
    ],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style>
  .card{
    height: 250px;
    padding: 5%;
    margin-top: -20px;
    margin-left: 350px;
    margin-bottom: 10%;
    border: none;
  }
  .card-content{
    color: white;
    background-color: #FDDB00;
    height: 500px;
    width: 300px !important;
    padding-top: 10px;
    border-radius: 10%;
  }
  .productName{
    color: #A84324;
  }
  .information{
    text-align: left;
    margin-left: 20px;
    color: #748A9D !important;
  }
  .detail{
    color: white !important;
    float: right !important;
    margin-right: 20px !important;
    background-color: #748A9D !important;
    width: 10% !important;
    border-radius: 50% !important;
    margin-bottom: 20px !important;
  }
  #price{
    font-size: 25px !important;
  }
</style>
