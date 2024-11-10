<template>
  <TanstackTable :data="tableData" :columns="columns"></TanstackTable>
</template>
<script lang="ts" setup>
import { ref, watch, h, computed, onMounted } from "vue";
import TanstackTable from "@/components/backStage/share/TanstackTable.vue";
import { createColumnHelper } from "@tanstack/vue-table";

type workData = {
  id: number;
  username: string;
  email: string;
  avatar: string;
  phone: number;
  workName: string;
  readCount: number;
  customer: string;
  status: string;
  createTime: Date;
  onlineView: boolean;
  actions: boolean;
};

const sorting = ref([]);
const filter = ref("");
const page = ref(1);
const perPage = ref(10);
let tableData = ref([]);
const columnHelper = createColumnHelper<workData>();

const fetchData = async () => {
  try {
    const response = await fetch(
      `/mock/getUserList?page=${page.value}&per_page=${perPage.value}&sort=${sorting.value}&filter=${filter.value}`
    );
    const data = await response.json();
    tableData = data.data.users;
    console.log("tableData", tableData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
watch(tableData, (newData) => {
  console.log("table data", newData);
});
const columns = [
  columnHelper.accessor("workName", {
    header: "作品名稱",
  }),
  columnHelper.accessor("customer", {
    header: "客戶",
  }),
  columnHelper.accessor("readCount", {
    header: "閱讀次數",
  }),
  columnHelper.accessor("status", {
    header: "狀態",
  }),
  columnHelper.accessor("createTime", {
    header: "創建時間",
  }),
  columnHelper.accessor("onlineView", {
    header: "線上帶看",
  }),
  columnHelper.accessor("actions", {
    header: "展開",
  }),
];
onMounted(fetchData);
</script>
<style lang="sass"></style>
