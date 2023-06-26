<template>
  <div class="formContainer">
    <h4>My CarPool Interest</h4>
    <Checkbox name="isInterested" label="I am interested in carpooling" />
    <Selectbox
      name="carpoolType"
      :options="[
        {
          id: 'driver',
          name: 'Driver',
        },
        {
          id: 'passenger',
          name: 'Passenger',
        },
      ]"
      label="Carpool options:"
    />
  </div>
</template>
<script setup>
import Checkbox from "@/components/Checkbox.vue";
import Selectbox from "@/components/Selectbox.vue";
</script>
<style lang="scss" scoped>
.formContainer {
  margin-top: 2rem;
  max-width: 500px;
}
</style>
