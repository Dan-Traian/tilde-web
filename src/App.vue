<script setup>
import { RouterView } from 'vue-router'
import NavItem from './components/core/NavItem.vue';
import FooterSection from './components/layout/sections/FooterSection.vue';
</script>

<template>
  <header class="sticky top-0 left-0 w-screen ">
    <nav class="w-full flex gap-4 py-3 items-center justify-center px-6">
      <img alt="Vue logo" class="logo mr-auto" src="@/assets/logo.svg" width="32" height="32" />
      <NavItem toPage="/" label="Home" />
      <NavItem toPage="/specialisation" label="Specialisation" />
      <NavItem toPage="/about" label="About me" />
      <NavItem toPage="/contact" label="Contact" />

    </nav>
  </header>
  <main>
    <RouterView>
    </RouterView>
    <FooterSection/>
  </main>
</template>

<style>
header {
  position: sticky;
  width: 100vw;

}

nav {
  gap: 20px;
}

main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 150px;
}
</style>
