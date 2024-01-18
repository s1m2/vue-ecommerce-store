<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue'
const AppBanner = defineAsyncComponent(() => import('@/components/AppBanner.vue'))
</script>

<template>
  <AppBanner v-if="false" text="20% Discount for first-timer only, Shop now!" />
  <AppHeader />
  <RouterView />
</template>
