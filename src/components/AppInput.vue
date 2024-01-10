<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})
</script>
<template>
  <input
    class="p-2 border border-gray-400"
    type="text"
    v-model="model"
    id="search"
    name="search"
    placeholder="Search Digital Tech"
    autocomplete="off"
  />
</template>
