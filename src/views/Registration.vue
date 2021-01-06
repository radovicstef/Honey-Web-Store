<template>
  <div class="registration">
    <div class="registration_form_div">
        <div class="registration">
            <h1><b>Registruj se</b></h1>
                <br/>
                <br/>
                  <div class="form-group">
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Ime" v-model='firstName'>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Prezime" v-model='lastName'>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Korisnicko ime" v-model='username'>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Email" v-model='email'>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Telefon" v-model='phone'>
                  </div>
                  <div class="form-group">
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Adresa" v-model='address'>
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                  <label for="inputPassword2" class="sr-only">Password</label>
                  <input type="password" class="form-control" id="inputPassword2" placeholder="Password" v-model='password'>
                  </div>
                  <br/>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" checked v-model='isKupac' value='y'>
                      <label class="form-check-label" for="exampleRadios1">
                          <b>Kupac</b>
                      </label>
                  </div>
                      <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" v-model='isKupac' value='n'>
                      <label class="form-check-label" for="exampleRadios2">
                          <b>Prodavac</b>
                      </label>
                  </div>
                  <br/>
                  <br/>
                  <button class="btn btn-primary mb-3" @click='register()'><b>REGISTRUJ SE</b></button>
                  <br/>
                  <br/>
                  </div>
                  <div class="error">
                    {{errorMessage}}
                  </div>
        </div>
      
    <div class="background_login">
      <img src="../assets/login.jpg" width="100%">
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'registration',
    props: [],
    mounted () {
    },
    data () {
      return {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        isKupac: '',
        errorMessage: '',
        myUsers: {}
      }
    },
    methods: {
      register(){
        this.errorMessage = '';
        if(localStorage.getItem('users') == null){
          this.addUser();
        }
        else{
          this.myUsers = JSON.parse(localStorage.getItem('users'));
          var user = this.myUsers.find(user => (user.username == this.username));
          if(user == null){
            this.addUser();
          }
          else{
            this.errorMessage = 'Korisnik sa zadatim imenom vec postoji';
          }
        }
      },
      addUser(){
        this.myUsers = JSON.parse(localStorage.getItem('users'));
        var user = {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
          phone: this.phone,
          address: this.address,
          password: this.password,
          isKupac: this.isKupac,
          basket: []
        };
        if(this.myUsers == null){
          this.myUsers = [];
          this.myUsers.push(user);
        }
        else{
          this.myUsers.push(user);
        }
        localStorage.setItem('users', JSON.stringify(this.myUsers));
        this.$router.replace('/successregistration');
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
</style>