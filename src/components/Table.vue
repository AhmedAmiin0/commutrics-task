<template>
  <div class="table-responsive">
    <table class="table">
      <thead class="">
        <tr>
          <th scope="col" v-for="col in cols"
            class='bg-main text-white'
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows">
          <td v-for="col in cols" :key="col.key">
            <template v-if="col.key === 'actions'">
              <component :is="row.actions" />
            </template>
            <template v-else>
              {{ row[col.key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
defineProps({
  cols: {
    type: Array,
    required: true,
  },
  rows: {
    type: Array,
    required: true,
  },
});
</script>
<style lang="scss">
</style>
