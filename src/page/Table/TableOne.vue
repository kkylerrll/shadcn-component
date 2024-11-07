<template>
  <TanstackTable :data="tableData"></TanstackTable>
</template>
<script lang="ts" setup>
import { ref, watch, h, computed, onMounted } from "vue";
import TanstackTable from "@/components/backStage/share/TanstackTable.vue";
const sorting = ref([]);
const filter = ref("");
const page = ref(1);
const perPage = ref(10);
let tableData = ref([]);

const fetchData = async () => {
  try {
    const response = await fetch(
      `/mock/getUserList?page=${page.value}&per_page=${perPage.value}&sort=${sorting.value}&filter=${filter.value}`
    );
    const data = await response.json();
    tableData = data;
    console.log("tableData", tableData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
watch(tableData, (newData) => {
  console.log("table data", newData);
});

onMounted(fetchData);
</script>
<style lang="sass"></style>
