
<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps({
  toPage: String,
  label: String,
  active: Boolean
})

console.log(props)
</script>

<template>
  <RouterLink
    class="text-brand-1 hover:text-gray-700 navItem px-2 py-1 rounded-xl fade-sm bg-transparent hover:bg-brand-2 font-medium"
    :to="props.toPage">{{ props.label }}</RouterLink>
</template>

<style scoped>
.navItem.router-link-active{
  background-color: var(--brand-1);
  color: var(--white);
}
</style>
