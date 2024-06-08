<script setup lang="ts">
definePageMeta({
  layout: 'login'
})
</script>
<template>
  <UCard class="w-80">
    <template #header>
      Sistema de control de suscripciones
    </template>
    <LoginForm />
  </UCard>
</template>
