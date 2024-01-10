<script setup lang="ts">
import IconUpArrow from './icons/IconUpArrow.vue';
import IconDownArrow from './icons/IconDownArrow.vue';

type Props = {
  title: string
  list: Array<string>
}

const { title, list } = defineProps<Props>()
const emit = defineEmits<{ (e: 'selectedCategory', value: string): void }>()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <button class="flex justify-between w-full" @click="toggle()">
      {{ title }}
      <component class="h-5 w-5" :is="isOpen ? IconUpArrow : IconDownArrow" />
    </button>

    <ul v-if="isOpen">
      <li class="cursor-pointer py-2" v-for="item in list" :key="item" @click="emit('selectedCategory', item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
