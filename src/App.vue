<template>
  <div id="app">
      <div class="container">
        <span>
        <a class="logo text-danger fw-bold fs-2" href="#">F.A</a>
        </span>
        <router-link to="/"><button>Home</button></router-link>  
        <router-link to="/about"><button>About</button></router-link> 
        <router-link :to='{name:"contact"}'><button>Contact</button></router-link>
        <router-view />
      </div>
    
    <!-- <router-link :to='{name:"/about"}'>About</router-link> -->
    <!-- <router-link :to='{name:"Dashboard"}'>Dashboard</router-link> -->


    <!-- <Todo_app />
    <hello /> -->
  </div>
</template>

<script>
// import Todo_app from './components/Todo_app.vue'


export default {
  name: 'App',
  components: {
    // Todo_app,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#app button{
  border-radius:10px;
  background-color: rgba(255, 50, 50, 0.788);
  color: rgb(54, 54, 54);
  margin-right: 33px;
  margin-left: 33px;
  border: 2px solid red;
}

#app button:hover{
  background-color: white;
  color: rgba(255, 50, 50, 0.788);
}

.logo {
  margin-right:38rem;
}

// body{
//   background-image: url("./assets/download1.jpg");
//   background-size: 100%;
// }
@import '~bootstrap/dist/css/bootstrap.min.css'

</style>