<template>
  <div class="formContainer">
    <h4>Commuter Data for carpool matching</h4>
    <div class="d-flex my-1 gap-lg-5 gap-2
      flex-column flex-lg-row 
    ">
      <Selectbox
        name="industry"
        :options="[
          { id: 'it', name: 'IT' },
          { id: 'healthcare', name: 'Healthcare' },
        ]"
        label="Industry:"
        containerClass="flex-1"
      />
      <Checkbox
        name="isSameIndustry"
        label="I prefer to carpool with people in the same industry"
        containerClass="flex-1"
      />
    </div>
    <div class="d-flex my-1 gap-lg-5 gap-2 flex-column flex-lg-row">
      <Selectbox
        name="gender"
        :options="[
          { id: 'male', name: 'Male' },
          { id: 'female', name: 'Female' },
        ]"
        label="Gender:"
        containerClass="flex-1"
      />
      <Checkbox
        name="isSameGender"
        label="I prefer to carpool with people in the same
        industry"
        containerClass="flex-1"
      />
    </div>
    <div class="d-flex my-1 gap-lg-5 gap-2 flex-column flex-lg-row">
      <Selectbox
        name="smoking"
        :options="[
          { id: 'non-smoker', name: 'Non Smoker' },
          { id: 'smoker', name: 'Smoker' },
        ]"
        label="Smoker:"
        containerClass="flex-1"
      />
      <Checkbox
        name="isSameSmoking"
        label="I prefer to carpool with people in the same industry"
        containerClass="flex-1"
      />
    </div>
    <div class="d-flex my-1 gap-lg-5 gap-2 flex-column flex-lg-row">
      <Selectbox
        name="type"
        :options="[{ id: 'recurring-trip', name: 'Recurring Trip' }]"
        label="type:"
        containerClass="flex-1"
      />
      <Checkbox
        name="isSameType"
        label="I prefer to carpool with people in the same industry"
        containerClass="flex-1"
      />
    </div>
    <div class="maxwidth">
      <Selectbox
        name="visibility"
        :options="[
          {
            id: 'visitable',
            name: 'Show my profile outside my work network for potential ',
          },
        ]"
        label="Visibility:"
        containerClass="flex-1"
      />
    </div>
    <div class="maxwidth">
      <Selectbox
        name="interest"
        :options="[
          {
            id: 'any',
            name: 'people from the same network or any network',
          },
        ]"
        label="Interest:"
        containerClass="flex-1"
      />
    </div>
    <WorkDays />
  </div>
</template>

<script setup>
import Checkbox from "@/components/Checkbox.vue";
import Selectbox from "@/components/Selectbox.vue";
import WorkDays from "./WorkDays.vue";
</script>
<style lang="scss">
.maxwidth {
  max-width: 500px;
}
</style>
