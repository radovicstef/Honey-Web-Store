<template>
  <div class="login">
    <div class="login_forma_div">
      <br>
      <br>
      <br>
      <h1><b>Uspešno ste promenili podatke</b></h1>
      <br/>
      <br/>
    </div>
    <div class="background_login">
      <img src="../assets/login.jpg" width="100%">
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'success',
    components:{
    },
    props: [],
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