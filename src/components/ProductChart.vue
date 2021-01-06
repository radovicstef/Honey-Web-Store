<template lang="html">

  <section class="product-chart">
    <div class='card'>
      <div class='card-content'>
        <div class="delete">
          <router-link to=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="16.617" height="19.905" viewBox="0 0 16.617 19.905" @click="deleteProduct()">
              <g id="icon-trash" transform="translate(0.5 0.5)">
                <path id="path" d="M572.329,657v9.037a3.292,3.292,0,0,1-3.293,3.293h-5.744A3.292,3.292,0,0,1,560,666.037V657" transform="translate(-558.356 -650.424)" fill="none" stroke="#748a9d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="path-2" data-name="path" d="M563.844,650.815A1.815,1.815,0,0,1,565.659,649h.583a1.815,1.815,0,0,1,1.815,1.815" transform="translate(-558.219 -649)" fill="none" stroke="#748a9d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="line" d="M0,0H15.617" transform="translate(0 4.11)" fill="none" stroke="#748a9d" stroke-linecap="round" stroke-width="1"/>
                <line id="line-2" data-name="line" y2="7" transform="translate(6 8)" fill="none" stroke="#748a9d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <line id="line-3" data-name="line" y2="7" transform="translate(10 8)" fill="none" stroke="#748a9d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
              </g>
            </svg>
          </router-link>
        </div>
        <div class='picture'>
          <img :src='/img/+productchart.proizvod.slika' width="50%">
        </div>

        <br>

        <div class='productInfo'>
          <div class='information'>
            <div class='productName'>
              <span><h2>{{productchart.proizvod.naziv}}</h2></span>
            </div>
            <span><h3 id="price">RSD {{productchart.ukupnaCena}}</h3></span>
          </div>
          <div>
            <button @click="umanjiBroj()">-</button>
            <input type="text" id="inputNumber" v-model="productchart.broj">
            <button @click="uvecajBroj()">+</button>
          </div>

          </router-link>

        </div>
        
        
        
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'productchart',
    props: [
      'productchart'
    ],
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {
      umanjiBroj(){
        this.productchart.broj = parseInt(this.productchart.broj)-1;
        this.productchart.ukupnaCena = parseInt(this.productchart.ukupnaCena) - parseInt(this.productchart.proizvod.cena);
        var products = JSON.parse(localStorage.getItem('korpa'));
        products[this.productchart.id].broj=this.productchart.broj;
        products[this.productchart.id].ukupnaCena = this.productchart.ukupnaCena;
        localStorage.setItem('korpa', JSON.stringify(products));
        location.reload();
      },
      uvecajBroj(){
        this.productchart.broj = parseInt(this.productchart.broj)+1;
        this.productchart.ukupnaCena = parseInt(this.productchart.ukupnaCena) + parseInt(this.productchart.proizvod.cena);
        var products = JSON.parse(localStorage.getItem('korpa'));
        products[this.productchart.id].broj=this.productchart.broj;
        products[this.productchart.id].ukupnaCena = this.productchart.ukupnaCena;
        localStorage.setItem('korpa', JSON.stringify(products));
        location.reload();
      },
      deleteProduct(){
        var products = JSON.parse(localStorage.getItem('korpa'));
        var i=0;
        for(i=0; i<products.length; i++){
          if(products[i] == null) continue;
          if(products[i].id==this.productchart.id){
            delete products[i];
          }
        }
        localStorage.setItem('korpa', JSON.stringify(products));
        location.reload();
      }
    },
    computed: {

    }
}


</script>

<style>
  .card{
    height: 100px;
    border: none;
    width: 25%;
  }
  .card-content{
    color: white;
    background-color: #FDDB00;
    height: 500%;
    width: 100% !important;
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
  #inputNumber{
    text-align: center;
    margin-bottom: 20px;
  }
  .delete{
    text-align: right;
    margin-right: 25px;
  }

</style>
