<script setup lang="ts">
import generatedRoutes from 'virtual:generated-pages'
const routes = generatedRoutes
</script>

<template>
  <div class="text-left py-2 mb-8">
    <router-link v-for="(value,index) in routes" :key="index+'route'" active-class="activeLink" class="mr-5 underline " :to="value.path">
      {{ value.name }}
    </router-link>
  </div>
</template>

<style scoped lang="scss">
  .activeLink{
    color:blue;
  }
</style>
