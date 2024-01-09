<script setup lang="ts">
import { useStripe } from '@/composables/stripe'

const statusMessage = ref('')
const { checkPaymentStatus } = useStripe()

onBeforeMount(async () => {
  statusMessage.value = await checkPaymentStatus()
})
</script>

<template>
  <div div class="max-w-screen-lg mx-auto my-7">
    <h1 class="text-2xl">{{ statusMessage }}</h1>
  </div>
</template>
