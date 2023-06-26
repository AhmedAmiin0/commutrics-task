<template>
  <h4 class="my-4">Working Days</h4>
  <div class="row my-1">
    <div class="col-lg-6">
      <div class="d-flex justify-content-between align-items-center">
        <Checkbox name="monday" label="Monday" containerClass="flex-1" />
        <Selectbox
          name="mondayStartTime"
          :options="[
            { id: 'morning', name: 'Morning' },
            { id: 'evening', name: 'Evening' },
          ]"
          label="Arrive Work At:"
          containerClass="flex-2"
        />
      </div>
    </div>
    <div class="col-lg-6">
      <div class="d-flex justify-content-between align-items-center">
        <Selectbox
          name="mondayLeavingTime"
          :options="[
            { id: 'morning', name: 'Morning' },
            { id: 'evening', name: 'Evening' },
          ]"
          label="Leave Work At"
          containerClass="flex-1"
        />
        <Selectbox
          name="mondaySchedule"
          :options="[
            { id: 'morning', name: 'Morning' },
            { id: 'evening', name: 'Evening' },
          ]"
          label="Schedule"
          containerClass="flex-1"
        />
      </div>
    </div>
  </div>
  <div class="row my-1">
    <div class="col-lg-6">
      <div class="d-flex justify-content-between align-items-center">
        <Checkbox name="monday" label="Monday" containerClass="flex-1" />
        <Selectbox
          name="mondayStartTime"
          :options="[
            { id: 'morning', name: 'Morning' },
            { id: 'evening', name: 'Evening' },
          ]"
          label="Arrive Work At:"
          containerClass="flex-2"
        />
      </div>
    </div>
    <div class="col-lg-6">
      <div class="d-flex justify-content-between align-items-center">
        <Selectbox
          name="mondayLeavingTime"
          :options="[
            { id: 'morning', name: 'Morning' },
            { id: 'evening', name: 'Evening' },
          ]"
          label="Leave Work At"
          containerClass="flex-1"
        />
        <Selectbox
          name="mondaySchedule"
          :options="[
            { id: 'morning', name: 'Morning' },
            { id: 'evening', name: 'Evening' },
          ]"
          label="Schedule"
          containerClass="flex-1"
        />
      </div>
    </div>
  </div>
  
</template>

<script setup>
import Selectbox from "@/components/Selectbox.vue";
import Checkbox from "@/components/Checkbox.vue";
</script>
