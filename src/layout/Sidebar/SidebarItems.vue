<template>
  <ul class="nav nav-pills flex-column mb-auto d-flex gap-1 "
    :class='class'
  >
    <li>
      <SidebarItem title="Members" route="/">
        <template #icon>
          <MembersIcon />
        </template>
      </SidebarItem>
    </li>
    <li>
      <SidebarItem title="My Carpool options" route="/carpooloptions">
        <template #icon>
          <OptionsIcon />
        </template>
      </SidebarItem>
    </li>
  </ul>
</template>
<script setup>
import MembersIcon from "@/components/Icons/MembersIcon.vue";
import SidebarItem from "@/layout/Sidebar/SidebarItem.vue";
import OptionsIcon from "@/components/Icons/OptionsIcon.vue";
defineProps({
  class:{
    type:String,
  }
})
</script>