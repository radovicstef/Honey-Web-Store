<template lang="html">
  <section class="navigation">
    <nav class='navbar'>
      <div class='navbar-brand'>
        <img src="../assets/logo1.png" width=160px>
      </div>
      <div class='navbar-menu'>
        <router-link to="/">Početna</router-link>
        <span @click="isOpenSession()"><router-link to=''>Prodavnica</router-link></span>
      </div>
      <div class='navbar-menu'>
        <span @click="isOpenSessionUser()"><router-link to=''><img id="user" src="../assets/user.png"></router-link></span>
        <span @click="shop()"><router-link to=''><img id="shop" src="../assets/shop.png"></router-link></span>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'navigation',
    props: [],
    mounted () {
    },
    data () {
      return {
        linkProdavnica: '/login'
      }
    },
    methods: {
      isOpenSession(){
        if(localStorage.getItem('loginUser')==null){
          this.$router.replace("/login");
        }
        else{
          var user = JSON.parse(localStorage.getItem('loginUser'));
          if(user.isKupac=='y'){
            this.$router.replace("/prodavnica");
          }
          else{
            this.$router.replace("/prodavnicaprodavac");
          }
        }
      },
      isOpenSessionUser(){
        if(localStorage.getItem('loginUser')==null){
          this.$router.replace("/login");
        }
        else{
          this.$router.replace("/profile");
        }
      },
      shop(){
        if(localStorage.getItem('loginUser')==null){
          this.$router.replace("/login");
        }
        else{
          var user = JSON.parse(localStorage.getItem('loginUser'));
          if(user.isKupac=='y'){
            window.location.href = "http://localhost:8080/korpa";
          }
          else{
            window.location.href = "http://localhost:8080/narudzbine";
          }
        }
      }
    },
    computed: {

    }
}


</script>

<style>
  .navigation {
    justify-content: center;
  }
  .navbar{
    width: 100%;
    -webkit-box-shadow: 10px 10px 10px #999;
  }
  .navbar-brand{
    padding: 10px;
  }
  .navbar-menu{
    padding: 10px;
  }
  a{
    color: black !important;
    font-size: 30px;
    padding: 30px;
    font: bold;
    font-family: Poppins;
  }
  a:hover{
    font: bolder;
    font-size: 35px;
    padding: 30px;
    font: bold;
    font-family: Poppins;
    text-decoration: none !important;
  }
  #shop{
    width: 50px;
    margin-right: 10px;
  }
  #user{
    width: 50px;
    margin-right: 20px;
  }
  
</style>
