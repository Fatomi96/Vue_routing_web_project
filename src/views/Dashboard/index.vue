<template>
<div>
     <h3>Welcome to my dashboard</h3>
     <div class="red-border">
          <nav>
               <router-link :to='{ name: "dashboard-home"}'>Dashboard Home</router-link> |
               <router-link :to='{ name: "user-dashboard"}'>User Dashboard</router-link>
          </nav>

          <router-view />
       </div>
</div>
</template>

<style scoped>
.red-border {
     border: 2px solid red;
}
</style>

