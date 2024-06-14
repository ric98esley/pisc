<script setup lang="ts">
definePageMeta({
  layout: 'login'
})
</script>
<template>
  <UCard class="min-h-80 min-w-60 flex flex-col justify-center items-center rounded-xl">
    <ColorScheme>
      <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" />
    </ColorScheme>
    <div>
      <span class="text-sm font-light">Bienvenido</span>
      <h1 class="text-2xl font-bold">Ingresa a tu cuenta</h1>
    </div>
    <LoginForm />
  </UCard>
</template>
