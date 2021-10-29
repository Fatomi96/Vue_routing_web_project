<template>
  <div class="blue-border">
       <h3>Welcome to user dashboard</h3>
       <nav>
               <router-link :to='{ name: "single-user", params: {id: "abbey"} }'>Abbey</router-link> |
               <router-link :to='{ name: "single-user", params: {id: "ibukun"} }'>Ibukun</router-link> |
               <router-link :to='{ name: "single-user", params: {id: "moyin"} }'>Moyin</router-link> |
               <router-link :to='{ name: "single-user", params: {id: "timi"} }'>Timi</router-link>
       </nav>
       
       <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.blue-border{
     border: 2px solid blue;
}
</style>