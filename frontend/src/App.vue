<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <RouterView />
      <Navbar />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/navigation/Navbar.vue'
</script>

<style>
/* Import de la font Inter si besoin */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  background-color: #f8f9fa; /* Couleur de fond par défaut */
}
</style>
