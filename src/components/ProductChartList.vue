<template lang="html">

  <div>
    <div>
      <section class="product-chart-list">
      <section class="productList">
        <div class="red">
          <div class="container" v-for='p in products'>
            <productchart :productchart='p'></productchart>
          </div>
        </div>
      </section>
    </section>
    </div>
    <br>
    <br>
    <div class="total">
      <h1>Total</h1>
      <h2>RSD: {{total}}</h2>
      <button @click="naruci()">NARUČI</button>
    </div>
  </div>
  

</template>

<script lang="js">
  import productchart from './ProductChart.vue';

  export default  {
    name: 'product-chart-list',
    components: {
      productchart
    },
    props: [],
    mounted () {
      this.username = JSON.parse(localStorage.getItem('loginUser')).username;
      this.allProducts = JSON.parse(localStorage.getItem('korpa'));
      var i = 0;
      var j = 0;
      this.total = 0;
      if(this.allProducts != null){
        console.log("hej");
        for(i=0; i<this.allProducts.length; i++){
          if(this.allProducts[i] == null) continue;
          if(this.allProducts[i].username==this.username){
            this.products[j] = this.allProducts[i];
            this.total = this.total + parseInt(this.allProducts[i].ukupnaCena);
            j++;
          }
        }
        console.log(this.products);
      }

      var i=0;
      this.total=0;
      if(this.allProducts != null){
        for(i=0; i<this.allProducts.length; i++){
          if(this.allProducts[i] == null) continue;
          this.total = this.total + parseInt(this.allProducts[i].ukupnaCena);
        }
      }
      
    },
    data () {
      return {
        products: [],
        allProducts: [],
        username: '',
        total: 0
      }
    },
    methods: {
      naruci(){
        var allProducts = JSON.parse(localStorage.getItem('korpa'));
        console.log(allProducts);
        var narudzbine = [];
        var i = 0;
        var j = 0;
        for(i=0; i<allProducts.length; i++){
          if(allProducts[i] == null) continue;
          narudzbine[j] = {};
          narudzbine[j].prodavac = allProducts[i].proizvod.proizvodjacId;
          narudzbine[j].kupac = allProducts[i].kupac.username;
          narudzbine[j].proizvodNaziv = allProducts[i].proizvod.naziv;
          narudzbine[j].broj = allProducts[i].broj;
          narudzbine[j].adresa = allProducts[i].kupac.address;
          narudzbine[j].telefon = allProducts[i].kupac.phone;
          j=j+1;
        }
        localStorage.removeItem('korpa');
        if(localStorage.getItem('narudzbine')==null){
          localStorage.setItem('narudzbine', JSON.stringify(narudzbine));
        }
        else{
          var sacuvaneNarudzbine = JSON.parse(localStorage.getItem('narudzbine'));
          var i = 0;
          var j = narudzbine.length;
          for(i=0; i<j; i++){
            sacuvaneNarudzbine[sacuvaneNarudzbine.length+i]=narudzbine[i];
          }
          localStorage.setItem('narudzbine', JSON.stringify(sacuvaneNarudzbine));
        }
        location.reload();
      }
    },
    computed: {

    }
}


</script>

<style>
  .product-char-list{
    position:absolute;
  }
  .product-list{
    position: absolute;
  }
  .container{
    justify-content: center;
    margin-bottom: 25%;
    width: 1200px;
    margin-left: 20%;
  }
  .red{
    justify-content: center;
    position: absolute;
    height: 1000px;
    padding: 100px;
    left: 22%;
  }
  .total{
    position: absolute;
    top: 22%;
    right: 4%;
  }
  .naruci{
    position: absolute;
    top: 35%;
    left: 93%;
  }
  .osvezi{
    position: absolute;
    top: 35%;
    left: 91.5%;
  }
</style>
