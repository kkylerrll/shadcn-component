<template>
  <TanstackTable :data="tableData" :columns="columns"></TanstackTable>
  <!-- <Pagination></Pagination> -->
</template>
<script lang="ts" setup>
import { ref, watch, h, computed, onMounted } from "vue";
import TanstackTable from "@/components/backStage/share/TanstackTable.vue";
// import Pagination from "@/components/backStage/share/SharePagination.vue";
import { createColumnHelper } from "@tanstack/vue-table";
import type { Task } from "./schema";

const sorting = ref([]);
const filter = ref("");
const page = ref(1);
const perPage = ref(10); // 每頁顯示的資料數量
let tableData = ref([]);
const columnHelper = createColumnHelper<Task>();

const fetchData = async () => {
  try {
    const response = await fetch(
      `/mock/getUserList?page=${page.value}&per_page=${perPage.value}&sort=${sorting.value}&filter=${filter.value}`
    );
    const data = await response.json();
    tableData.value = data.data.users;
    console.log("data", data);
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
    enableSorting: false,
  }),
  columnHelper.accessor("customer", {
    header: "客戶",
    enableSorting: false,
    cell: (info) => {
      const name = info.row.original.username;
      const phone = info.row.original.phone;
      return h("div", [
        h("div", name), // 名稱
        h("div", phone), // 電話
      ]);
    },
  }),
  columnHelper.accessor("readCount", {
    header: "閱讀次數",
  }),
  columnHelper.accessor("status", {
    header: "狀態",
    cell: (info) => (info.getValue() === "0" ? "公開" : "不公開"),
  }),
  columnHelper.accessor("createTime", {
    header: "創建時間",
  }),
  columnHelper.accessor("actions", {
    header: "展開",
    enableSorting: false,
    cell: ({ row }) => {
      return row.getCanExpand()
        ? h(
            "button",
            {
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: "pointer" },
            },
            row.getIsExpanded() ? "👇" : "👉"
          )
        : "";
    },
  }),
];
onMounted(fetchData);
</script>
<style lang="sass"></style>
