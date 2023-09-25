<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppBanner from '@/components/AppBanner.vue'
</script>

<template>
  <AppBanner text="20% Discount for first-timer only, Shop now!" />
  <AppHeader />
  <RouterView />
</template>