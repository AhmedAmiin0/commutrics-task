<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 sidebar d-none d-lg-block">
    <SidebarItems />
  </div>
</template>
<style lang="scss">
.sidebar {
  width: 280px;
  height: 100vh;
  background-color: var(--dark-grey);
}
</style>
<script setup>
import SidebarItems from "@/layout/Sidebar/SidebarItems.vue";
</script>
