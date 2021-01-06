<template>
  <div id="app">
    <div id="nav">
      <navigation/>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
import navigation from './components/Navigation'

export default{
    name: 'App',
    components: {
      navigation
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
