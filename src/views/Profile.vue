<template>
  <div class="registration">
    <div class="registration_form_div">
        <div class="registration">
            <h1><b>Izmeni podatke</b></h1>
                <br/>
                <br/>
                  <div class="form-group">
                    Ime
                    <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="user.firstName" v-model='user.firstName'>
                  </div>
                  <div class="form-group">
                      Prezime
                      <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="user.lastName" v-model='user.lastName'>
                  </div>
                  <div class="form-group">
                      Email
                      <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="user.email" v-model='user.email'>
                  </div>
                  <div class="form-group">
                      Telefon
                      <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="user.phone" v-model='user.phone'>
                  </div>
                  <div class="form-group">
                      Adresa
                      <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="user.address" v-model='user.address'>
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">Password</label>
                  Šifra
                  <input class="form-control" id="inputPassword2" :placeholder="user.password" v-model='user.password'>
                  </div>
                  <br/>
                  <br/>
                  <button class="btn btn-primary mb-3" @click='changeData()'><b>IZMENI PODATKE</b></button>
                  <br/>
                  <button id="logout" class="btn btn-primary mb-3" @click='logout()'><b>ODJAVI SE</b></button>
                  <br/>
                  </div>
        </div>
      
    <div class="background_login">
      <img src="../assets/login.jpg" width="100%">
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'profile',
    props: [],
    mounted () {
        this.user = JSON.parse(localStorage.getItem('loginUser'));
        console.log(this.user);
    },
    data () {
      return {
        user: {},
        myUsers: {}
      }
    },
    methods: {
      changeData(){
        this.myUsers = JSON.parse(localStorage.getItem('users'));
        var loopOn = true;
        var i = 0;
        while(loopOn){
          if(this.myUsers[i].username == this.user.username){
            this.myUsers[i] = this.user;
            loopOn = false;
          }
          i = i + 1;
        }
        localStorage.setItem('users', JSON.stringify(this.myUsers));
        localStorage.setItem('loginUser', JSON.stringify(this.user));
        this.message = "Uspesno promenjeni podaci";
        this.$router.replace('/success');
      },
      logout(){
        localStorage.removeItem('loginUser');
        localStorage.removeItem('korpa');
        this.$router.replace('/successlogout');
      }
    },
    computed: {

    }
}


</script>


<style>
  .registration{
    position: relative;
    justify-content: center;
    text-align: center;
  }
  .registration_form_div{
    position: absolute;
    top: 100px;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    color: #A84324;
  }
  .background_login{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  #formGroupExampleInput{
    background-color: white;
    width: 20%;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
  }
  #inputPassword2{
    background-color: white;
    width: 20.5%;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
  }
  .btn.btn-primary.mb-3{
    width: 20%;
    border-radius: 50px;
    background: #A84324;
  }
  .btn.btn-primary.mb-3:hover{
    color: white;
  }
  .btn.btn-primary.mb-2:hover{
    color: white;
  }
  .registracija{
    color: #A6BCD0;
  }
  .registruj_se:hover{
    color: #A84324;
  }
  .form-check{
      padding-left: 35px;
      padding-top: 5px;
      padding-bottom: 5px;
      border-radius: 10px;
      margin-top: 10px;
      background-color: #a6bcd0c9;
      width: 20%;
      color: white;
      text-align: left;
      left: 40%;
  }
  #logout{
    background-color: red;
  }
</style>