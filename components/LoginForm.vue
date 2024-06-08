<script setup>
const formState = reactive({
  email: undefined,
  password: undefined
})
</script>


<template>
  <UForm :state="formState" class="space-y-4 p-4">
    <UFormGroup label="Correo electrónico" required>
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>
    <UFormGroup label="Contraseña" required>
      <UInput type="password" icon="i-heroicons-key" />
    </UFormGroup>
    <UButton type="submit">
      Entrar
    </UButton>
  </UForm>
</template>