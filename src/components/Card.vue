<template>
  <div class="card bg-white mt-5">
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--main);
}
</style>
