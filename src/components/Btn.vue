<template>
  <button :class="class" class="btn btn-sm">
    <slot name="leftIcon"></slot>
    <slot class="content"></slot>
    <slot name="rightIcon"></slot>
  </button>
</template>
<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  gap: 0.5rem;
}
</style>
<script setup>
defineProps({
  class: {
    type: String,
    default: "basic",
  },
});
</script>
