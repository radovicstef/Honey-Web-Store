<template>
    <div>
        <div class="prodavac">
            <img src='../assets/prodavac.jpg' width="20%">
        </div>
        <div class="proizvod">
            <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput1" placeholder="Naziv" v-model='naziv'>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput1" placeholder="Cena" v-model='cena'>
            </div>
            <div class="form-group">
                <textarea type="text" class="form-control" id="formGroupExampleInput1" placeholder="Opis" v-model='opis'></textarea>
            </div>
            <div class="form-group">
                <textarea type="text" class="form-control input-lg" id="inputlg" placeholder="Način upotrebe" v-model='nacinupotrebe'><textarea></textarea>
            </div>
            <br/>
            <div>
                <input type="file" @change="onFileSelected">
                <br/>
            </div>
            <br/>
            <button id="dodajProizvod" class="btn btn-primary mb-3" @click="dodajProizvod()"><b>DODAJ PROIZVOD</b></button>
        </div>
    </div>
</template>


<script lang="js">

  export default  {
    name: 'prodavnicaProdavac',
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
        onFileSelected(){
            console.log(event.target.files[0].name);
            this.slika = event.target.files[0].name;
        },
        dodajProizvod(){
            //staviti naziv slike koja ce se nalaziti u assets
            //u jedan od atributa objekta proizvod
            var user = JSON.parse(localStorage.getItem('loginUser'));
            var proizvod = {};
            proizvod.naziv = this.naziv;
            console.log('naziv'+this.naziv);
            proizvod.cena = this.cena;
            proizvod.opis = this.opis;
            proizvod.nacinupotrebe = this.nacinupotrebe;
            proizvod.proizvodjac = user.firstName + " " + user.lastName;
            proizvod.proizvodjacId = user.username;
            proizvod.slika = this.slika;

            if(localStorage.getItem('proizvodi') == null){
                var proizvodi = [];
                proizvod.id = 0;
                console.log(proizvod.id);
                proizvodi[0] = proizvod;
                localStorage.setItem('proizvodi', JSON.stringify(proizvodi))
            }
            else{
                var proizvodi = JSON.parse(localStorage.getItem('proizvodi'));
                proizvod.id = proizvodi.length;
                proizvodi[proizvodi.length] = proizvod;
                localStorage.setItem('proizvodi', JSON.stringify(proizvodi));
            }
            this.$router.replace('/successAddProizvod');
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
    .proizvod{
        position: absolute;
        margin-left: 45%;
        margin-top: -17%;
    }
    #dodajProizvod{
        width: 100%;
    }
    #formGroupExampleInput1{
        width: 100%;
    }
</style>