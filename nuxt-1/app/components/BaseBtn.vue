<script setup lang="ts">
defineProps<{
  label?: string;
  to?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="px-4 py-2 text-white self-start bg-[#f79f1a] rounded-md text-base lg:text-lg cursor-pointer"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
</template>