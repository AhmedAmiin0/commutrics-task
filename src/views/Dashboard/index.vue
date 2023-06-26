<template>
  <Card>
    <h3>
      Header
    </h3>
    <Table :cols="cols" :rows="data"> </Table>
  </Card>
  <Card>
    <InvitationForm />
  </Card>
</template>

<style lang="scss">
.formHeader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  gap: 1rem;
  h5 {
    color: #903949;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 0.4rem;
  }
}
</style>
<script setup>
import Card from "@/components/Card.vue";
import Table from "@/components/Table.vue";
import DashboardTableBtns from "@/views/Dashboard/components/table/TableBtns.vue";
import { cols } from "@/views/Dashboard/components/table/table.cols";
import InvitationForm from "@/views/Dashboard/components/invitationForm/InvitationForm.vue";
let data = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "example@a.com",
    phone: "1-770-736-8031 x56442",
    actions: DashboardTableBtns,
  },
];
</script>
