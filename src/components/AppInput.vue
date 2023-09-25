<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})

</script>
<template>
  <input type="text" v-model="model" id="search" name="search" placeholder="Search Digital Tech" autocomplete="off"/> 
</template>