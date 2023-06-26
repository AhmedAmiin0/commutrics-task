<script setup>
import Navbar from "@/layout/Navbar/Navbar.vue";
import Sidebar from "@/layout/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="layout">
    <Navbar />
    <div class="d-flex justify-content-between align-items-center">
      <Sidebar />
      <main class="container m-auto 
        bg-body-tertiary min-vh-100 
      ">
        <slot />
      </main>
    </div>
  </div>
</template>
<style scoped>
. {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .container {
    padding-top: 1rem;
  }
}
</style>
