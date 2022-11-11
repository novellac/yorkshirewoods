<template>
  <li class="border-[.5rem]" :class="`card--${theme}`">
    <slot />
  </li>
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    default: 'green',
    validator(t) {
      return ['green', 'silver'].includes(t)
    },
  },
})
</script>

<style scoped>
.card--green {
  @apply border-green-700 bg-green-100;
}

.card--silver {
  @apply border-gray-200 bg-gray-50;
}
</style>
