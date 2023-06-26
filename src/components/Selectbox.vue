<script setup>
defineProps({
  options: {
    type: Array,
    default: [],
  },
  class: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  selectedValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
  containerClass: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="d-flex justify-content-between  align-items-center" :class="containerClass">
    <label :for="name" v-if="label" :class="labelClass" class='w-100'>
      {{ label }}
    </label>
    <select :class="class" class="form-select form-select-sm" :name="name">
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
        :selected="option.id == selectedValue"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
