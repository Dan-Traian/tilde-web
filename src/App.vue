<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 left-0 w-screen ">
    <nav class="w-full flex gap-4 py-3 items-center justify-center px-6">
      <img alt="Vue logo" class="logo mr-auto" src="@/assets/logo.svg" width="32" height="32" />
      <RouterLink class="nav text-gray-600 hover:text-gray-700" to="/">Home</RouterLink>
      <RouterLink class="nav text-gray-600 hover:text-gray-700" to="/specialisation">Specialisation</RouterLink>
      <RouterLink class="nav text-gray-600 hover:text-gray-700" to="/about">About me</RouterLink>
      <RouterLink class="nav text-gray-600 hover:text-gray-700" to="/contact">Contact</RouterLink>
      
    </nav>
  </header>
  <main>
    <RouterView>
  </RouterView>
  </main>
</template>

<style>
header {
  position: sticky;
  width: 100vw;

  nav {
    gap: 20px;
  }
}

main {
  width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
</style>
