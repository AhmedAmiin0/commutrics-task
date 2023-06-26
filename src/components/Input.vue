<template>
  <label
    :for="name"
    :class="labelClass"
    class="d-flex flex-column gap-1 text-body-tertiary w-100"
  >
    <span v-if="label">{{ label }}</span>
    <input
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :class="class"
      :id="name"
      class="form-control bg-body-tertiary q border-0 border-bottom border-2 py-2 px-3 rounded-0"
    />
    <span class="rightIcon">
      <slot name="rightIcon" />
    </span>
  </label>
</template>
<style scoped lang="scss">
label {
  position: relative;
  input {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--main);
    &:focus {
      border-bottom: 1px solid var(--main-darker);
    }
    &::file-selector-button {
      display: none;
    }
    &::-webkit-file-upload-button {
      display: none;
    }
  }
  .rightIcon {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
}
</style>
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
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  class: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
});
</script>
