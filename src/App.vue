<template>
  <div id="app">
    <Todo_app />
  </div>
</template>

<script>
import Todo_app from './components/Todo_app.vue'

export default {
  name: 'App',
  components: {
    Todo_app
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
body{
  background-image: url("./assets/download1.jpg");
  background-size: 100%;
}
@import '~bootstrap/dist/css/bootstrap.min.css'

</style>