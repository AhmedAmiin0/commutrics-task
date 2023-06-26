<template>
  <div class="d-flex flex-column gap-2">
    <!-- <Tabs :routes="routes" /> -->
    <form class='d-flex flex-column gap-5'>
    <InterestForm />
    <CommuterDataForm />
    <CarpoolDays/>
    </form>
  </div>
</template>
<script setup>
import Tabs from "@/components/Tabs.vue";
import InterestForm from "./components/forms/Interest.vue";
import CommuterDataForm from "./components/forms/Commuter.vue";
const routes = [
  {
    route: "/carpooloptions",
    title: "CarPool Details",
  },
  {
    route: "/mycarpoolplans",
    title: "My Carpool Plans",
  },
];
</script>
<style lang="scss">
.InterestFormContainer {
}
</style>
