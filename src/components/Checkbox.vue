<template>
  <div class="form-check" :class="containerClass">
    <input
      :class="inputClass"
      class="form-check-input"
      type="checkbox"
      :value="value"
      :id="name"
    />
    <label :class="labelClass" class="form-check-label" :for="name" v-if="label">
      {{ label }}</label
    >
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  containerClass: {
    type: String,
    default: "",
  },
  inputClass: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
});
</script>
