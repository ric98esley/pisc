<script setup>
const router = useRouter()
const formState = reactive({
  email: undefined,
  password: undefined
})

const errorMessage = ref('')
const showError = ref(false)

const supabase = useSupabaseClient()

const signInWithPassword = async () => {
  const { error, data } = await supabase.auth.signInWithPassword({
    email: formState.email,
    password: formState.password
  })

  if (error) {
    errorMessage.value = error.message
    showError.value = true
  }
  else {
    router.push('/')
  }
}
</script>


<template>
  <UForm :state="formState" class="space-y-4 p-4" @submit="signInWithPassword">
    <UFormGroup label="Correo electrónico" required>
      <UInput placeholder="you@example.com" icon="i-heroicons-envelope" v-model="formState.email" />
    </UFormGroup>
    <UFormGroup label="Contraseña" required>
      <UInput type="password" icon="i-heroicons-key" v-model="formState.password" />
    </UFormGroup>
    <UAlert color="red" :title="errorMessage" v-if="showError" />
    <UButton type="submit">
      Entrar
    </UButton>
  </UForm>
</template>