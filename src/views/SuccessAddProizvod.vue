<template>
    <div>
        <div class="prodavac">
            <img src='../assets/prodavac.jpg' width="20%">
        </div>
        <div class="successAddProizvod">
            <h1><b>Uspešno ste <br/> dodali proizvod</b></h1>
            <br>
            <button id="dodajNoviProizvod" class="btn btn-primary mb-3" @click='dodajNoviProizvod()'><b>DODAJ NOVI PROIZVOD</b></button>
        </div>
    </div>
</template>


<script lang="js">

  export default  {
    name: 'successAddProizvod',
    props: [],
    mounted () {

    },
    data () {
      return {
          naziv: '',
          cena: '',
          opis: '',
          nacinupotrebe: '',
          slika: ''
      }
    },
    methods: {
        dodajNoviProizvod(){
            this.$router.replace('/prodavnicaProdavac');
        }
    },
    computed: {

    }
}


</script>

<style>
    .prodavac{
        text-align: left;
        margin-top: 8%;
        margin-left: 15%;
    }
    .successAddProizvod{
        position: absolute;
        margin-left: 45%;
        margin-top: -15%;
        color: #A84324;
    }
    #dodajProizvod{
        width: 100%;
    }
    #dodajNoviProizvod{
        width: 100%;
    }
</style>