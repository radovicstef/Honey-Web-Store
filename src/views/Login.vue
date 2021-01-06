<template>
  <div class="login">
    <div class="login_forma_div">
      <h1><b>Uloguj se</b></h1>
      <br/>
      <br/>
        <div class="form-group">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Korisnicko ime" v-model='username'>
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" class="sr-only">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" v-model='password'>
      </div>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary mb-2" @click='loginUser()'><b>PRIJAVI SE</b></button>
      <br/>
      <br/>
      <div class="registracija">
        <h3><b>NEMAS NALOG?</b></h3>
        <h2><router-link class="registruj_se" to="/registration"><b class="registruj_se">REGISTRUJ SE</b></router-link></h2>
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
    name: 'login',
    components:{
    },
    props: [],
    mounted () {
      
    },
    data () {
      return {
        username: '',
        password: '',
        errorMessage: '',
        myUsers: ''
      }
    },
    methods: {
      loginUser(){
        this.errorMessage = '';
        this.myUsers = JSON.parse(localStorage.getItem('users'));
        if(this.myUsers == null){
          this.errorMessage = 'Korisnik nije registrovan!';
          return;
        }
        var user = this.myUsers.find(user => (user.username == this.username)
          && (user.password == this.password));
        if(user == null){
          this.errorMessage = 'Korisnik nije registrovan!';
          return;
        }
        localStorage.setItem('loginUser', JSON.stringify(user));
        this.$router.replace('/welcome');
      }
    },
    computed: {

    }
}

</script>


<style>
  .login{
    position: relative;
    justify-content: center;
    text-align: center;
  }
  .login_forma_div{
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
  .btn.btn-primary.mb-2{
    width: 20%;
    border-radius: 50px;
    background: #7BED8D;
  }
  .btn.btn-primary.mb-2:hover{
    color: white;
  }
  .registracija{
    color: #A6BCD0;
  }
  .registruj_se{
    color: #A6BCD0;
  }
  .registruj_se:hover{
    color: #A84324;
  }
  .error{
    color: white;
    position: absolute;
    width: 30%;
    background-color: #A84324;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
  }
</style>