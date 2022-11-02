<script setup lang="ts">

</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/state">Pinia state</router-link> | 
    <router-link to="/actions">Pinia actions</router-link> | 
    <router-link to="/router">Router</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
</style>
