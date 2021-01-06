<template>
  <div class="productDetails">
    <div>
        <div class="back">
            <router-link to='/prodavnica'><h1>&lt</h1></router-link>
        </div>
        <div class="productImage">
            <img :src='/img/+product.slika' width="42%">
        </div>
        <div class = "productText">
            <h1>{{product.naziv}}</h1>
            <div class="productText2">
                {{product.opis}}
            </div>
            <br>
            <br>
            <div>
                Cena: RSD {{product.cena}}
            </div>
            <br>
            <div>
                Upotreba
                <div class="productText2">
                    {{product.nacinupotrebe}}
                </div>
            </div>
            <br>
            <br>
            <div>
                <input type="text" class="input" id="formGroupExampleInput" placeholder="1" v-model="broj" @change="overallPrice()">
                <span class="overallPrice">RSD {{ukupnaCena}}</span>
                <span><button type="submit" class="addToChart" @click="addToChart()"><b>DODAJ U KORPU</b></button></span>
            </div>
            <br>
            <br>
            <div>
                Proizvođač:
                <div class="productText2">
                    {{product.proizvodjac}}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'productdetails',
    components:{
    },
    props: [],
    mounted () {
      var id = Number(this.$route.params.id);
      var products = JSON.parse(localStorage.getItem('proizvodi'));
      this.product = products[id];
      this.ukupnaCena = this.product.cena;
    },
    data () {
      return {
         product: {},
         broj: 1,
         ukupnaCena: ''
      }
    },
    methods: {
        overallPrice(){
            this.ukupnaCena = parseInt(this.broj)*parseInt(this.product.cena);
        },
        addToChart(){
            var buyer = JSON.parse(localStorage.getItem('loginUser'));
            var narudzbina = {};
            narudzbina.broj = this.broj;
            narudzbina.ukupnaCena = this.ukupnaCena;
            narudzbina.kupac = buyer;
            narudzbina.proizvod = this.product;
            if(localStorage.getItem('korpa')==null){
                narudzbina.id = '0';
                console.log(narudzbina.id);
                narudzbina.username = buyer.username;
                var narudzbine = [];
                narudzbine[0] = narudzbina;
                localStorage.setItem('korpa', JSON.stringify(narudzbine));
            }
            else{
                var narudzbine = JSON.parse(localStorage.getItem('korpa'));
                narudzbina.id = narudzbine.length;
                console.log(narudzbina.id);
                narudzbina.username = buyer.username;
                narudzbine.push(narudzbina);
                localStorage.setItem('korpa', JSON.stringify(narudzbine));
            }
            this.$router.replace('/successAddToChart');
        }
    },
    computed: {

    }
}

</script>


<style>
    .productImage{
        text-align: left;
    }
    .back{
        position: absolute;
        margin-left: 60px;
        top: 200px;
    }
    .productText{
        top: 30%;
        left: 50%;
        position: absolute;
        text-align: left;
        font-weight: bolder !important;
        color: #A84324; 
    }
    .productText2{
        font-weight: normal !important;
        color: #748A9D !important;
        width: 60%;
    }
    .input{
        width: 10%;
        height: 50px;
        text-align: center;
        border: none;
        background-color: #748A9D;
        color: white;
        border-radius: 10px;
    }
    ::placeholder{
        color: white;
    }
    .overallPrice{
        margin-left: 20px;
        margin-right: 125px;
        color: #748A9D;
    }
    .addToChart{
        background-color: #FBDE07;
        border: none;
        padding: 10px;
        color: white;
        width: 250px;
        border-radius: 30px;
    }
</style>