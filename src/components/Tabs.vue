<template>
  <section class="nav nav-pills flex-column flex-sm-row">
    <template v-for="route in routes">
      <RouterLink
        :to="route.route"
        class="flex-sm-fill text-sm-center nav-link d-flex align-items-center justify-content-center"
        :class="{ active: $route.path === route.route }"
      >
        <component :is="route.icon" class="me-2" />
        <span>{{ route.title }}</span>
      </RouterLink>
    </template>
  </section>
</template>
<script setup>
defineProps({
  routes: {
    type: Array,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.nav-link {
  border: 1px solid var(--main);
}
</style>
