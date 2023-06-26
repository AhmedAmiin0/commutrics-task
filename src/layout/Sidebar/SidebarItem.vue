<template>
  <RouterLink :to="route" class="nav-link" :class="{ active: $route.path === route }">
    <slot name="icon" />
    <span>{{ title }}</span>
  </RouterLink>
</template>
<style lang="scss">
.nav-link {
  color: var(--light-grey);
  display: flex;
  align-items: center;
  gap: 10px;
  &.active {
    background: var(--main) !important;
    color: var(--bs-white) !important;
  }
  &:hover {
    background: var(--main);
    color: var(--bs-white);
  }
}
</style>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});
</script>