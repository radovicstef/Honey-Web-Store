<template>
  <div>
      <div class="proizvodProdavac">
          <div>
              Kupac: {{this.trenutnaNarudzbina.kupac}}
          </div>
          <div>
              Proizvod: {{this.trenutnaNarudzbina.proizvodNaziv}}
          </div>
          <div>
              Kolicina: {{this.trenutnaNarudzbina.broj}}
          </div>
          <div>
              Adresa: {{this.trenutnaNarudzbina.adresa}}
          </div>
      </div>
      <br/>
      <div>
          <input type="text" placeholder="Broj dana" v-model='brojDana'>
      </div>
      <div>
          <br/>
          <br/>
          <button class="prihvati" @click="prihvati()"><router-link class="prihvatiLink" to=''>PRIHVATI</router-link></button>
          <button class="odbij" @click="odbij()"><router-link class="odbijLink" to=''>ODBIJ</router-link></button>
      </div>
      <div>
          {{this.message}}
      </div>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'narudzbine',
    components:{
    },
    props: [],
    mounted () {
        this.user = JSON.parse(localStorage.getItem('loginUser'));
        this.sveNarudzbine = JSON.parse(localStorage.getItem('narudzbine'));
        var i = 0;
        var j = 0;
        for(i=0; i<this.sveNarudzbine.length; i++){
            if(this.sveNarudzbine[i]==null){
                continue;
            }
            if(this.sveNarudzbine[i].brojDana!=null){
                continue;
            }
            if(this.sveNarudzbine[i].brojDana!=undefined){
                continue;
            }
            if(this.sveNarudzbine[i].prodavac == this.user.username){
                this.mojeNarudzbine[j] = this.sveNarudzbine[i];
                this.mojeNarudzbine[j].id = i;
                j++;
            }
        }
        this.trenutnaNarudzbina = this.mojeNarudzbine[0];
    },
    data () {
      return {
          sveNarudzbine: [],
          mojeNarudzbine: [],
          user: {},
          brojDana: undefined,
          trenutnaNarudzbina: {},
          message: ''
      }
    },
    methods: {
        prihvati(){
            if(this.brojDana==undefined){
                this.message="Niste definisali broj dana za dostavu!";
            }
            else{
                this.message="";
                this.sveNarudzbine[this.trenutnaNarudzbina.id].brojDana=this.brojDana;
                localStorage.setItem('narudzbine', JSON.stringify(this.sveNarudzbine));
                var i = 0;
                var j = 0;
                for(i=0; i<this.sveNarudzbine.length; i++){
                    if(this.sveNarudzbine[i]==null){
                        continue;
                    }
                    if(this.sveNarudzbine[i].brojDana!=null){
                        continue;
                    }
                    if(this.sveNarudzbine[i].brojDana!=undefined){
                        continue;
                    }
                    if(this.sveNarudzbine[i].prodavac == this.user.username){
                        this.mojeNarudzbine[j] = this.sveNarudzbine[i];
                        this.mojeNarudzbine[j].id = i;
                        j++;
                    }
                }
                if(this.mojeNarudzbine.length==0){
                    this.trenutnaNarudzbina={};
                }
                else{
                    this.trenutnaNarudzbina = this.mojeNarudzbine[0];
                    location.reload();
                }
            }
        },
        odbij(){
            this.message="";
            this.sveNarudzbine[this.trenutnaNarudzbina.id].brojDana=-1;
            localStorage.setItem('narudzbine', JSON.stringify(this.sveNarudzbine));
            var i = 0;
            var j = 0;
            for(i=0; i<this.sveNarudzbine.length; i++){
                if(this.sveNarudzbine[i]==null){
                    continue;
                }
                if(this.sveNarudzbine[i].brojDana!=null){
                    continue;
                }
                if(this.sveNarudzbine[i].brojDana!=undefined){
                    continue;
                }
                if(this.sveNarudzbine[i].prodavac == this.user.username){
                    this.mojeNarudzbine[j] = this.sveNarudzbine[i];
                    this.mojeNarudzbine[j].id = i;
                    j++;
                }
            }
            if(this.mojeNarudzbine.length==0){
                this.trenutnaNarudzbina={};
            }
            else{
                this.trenutnaNarudzbina = this.mojeNarudzbine[0];
                location.reload();
            }
        }
    },
    computed: {

    }
}

</script>

<style>
    .proizvodProdavac{
        margin-top: 150px;
        background-color: #FECF8B;
        border-radius: 200px;
        height: 270px;
        width: 15%;
        padding: 70px;
        margin-left: 42%;
    }
    .prihvati{
        background-color: rgb(5, 201, 5);
        color: white !important;
        border: none !important;
    }
    .prihvatiLink{
        color: white !important;
        border: none !important;
    }
    .odbij{
        background-color: rgb(201, 44, 5);
        color: white !important;
        border: none !important;
    }
    .odbijLink{
        color: white !important;
        border: none !important;
    }
</style>