<template>
  <div>
       
       <h1>Welcome {{$route.params.id.toUpperCase ()}}</h1>
  </div>
</template>

<script>
export default {
     name: "SingleUser",
     // computed: {
     //      user( {
     //           const user = this.$route.params.id.toUpperCase ();
     //           return user
     //      })
     // }
}
</script>

<style>

</style>