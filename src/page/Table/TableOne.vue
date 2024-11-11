<template>
  <div class="flex flex-col flex-1">
    <FilterComponent :table="table" :column="columns"></FilterComponent>
    <TanstackTable
      :data="tableData"
      :columns="columns"
      @sortingChanged="sortingChanged"
      @tableInstance="handleTable"
      @handleFilter="handleFilter"
    ></TanstackTable>
    <Pagination
      :page="page"
      :total="total"
      :totalPage="totalPage"
      @pageChange="pageChange"
    ></Pagination>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, h, computed, onMounted } from "vue";
import TanstackTable from "@/components/backStage/share/TanstackTable.vue";
import Pagination from "@/components//backStage/share/Pagination.vue";
import FilterComponent from "@/components/backStage/share/FilterComponent.vue";
import { createColumnHelper } from "@tanstack/vue-table";
import type { Task } from "./schema";
import axios from "axios";

// const sorting = ref([]); // 排序
const sortOrder = ref(""); // 排序 降序 or 降序
const sortField = ref(""); // 排序欄位
const filter = ref({});
const filterStatus = ref("");
const page = ref<number>(1);
const perPage = ref(10); // 每頁顯示的資料數量
const total = ref(1);
const totalPage = ref(1);
let tableData = ref([]);
const columnHelper = createColumnHelper<Task>();
const table = ref({});
const fetchData = async () => {
  try {
    const params = {
      page: page.value,
      per_page: perPage.value,
      sort: sortOrder.value,
      sortField: sortField.value,
      status: filterStatus.value,
    };
    const response = await axios.get("/mock/getUserList", { params });

    const data = await response.data;
    tableData.value = data.data.users;
    page.value = data.data.page;
    total.value = data.data.total;
    totalPage.value = data.data.total_pages;
    console.log("data", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
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
    cell: (info) => (info.getValue() === "1" ? "公開" : "不公開"),
  }),
  columnHelper.accessor("createTime", {
    header: "創建時間",
  }),
  columnHelper.accessor("actions", {
    header: "展開",
    enableSorting: false,
    cell: ({ row }) => {
      return h(
        "button",
        {
          onClick: row.getToggleExpandedHandler(),
          style: { cursor: "pointer" },
        },
        row.getIsExpanded() ? "👇" : "👉"
      );
    },
  }),
];
onMounted(fetchData);

const pageChange = (newPage: number) => {
  page.value = newPage;
  fetchData();
};
const sortingChanged = (newObject: any) => {
  sortField.value = newObject ? newObject.id : "";
  sortOrder.value = newObject ? (newObject.desc ? "desc" : "asc") : "";
  console.log("sort", sortOrder.value, sortField.value);
  // sorting.value = newObject;
  // console.log("sort", sorting.value);
  fetchData();
};
const handleTable = (newObject: {}) => {
  table.value = newObject;
};

interface Filter {
  id: string;
  value: string;
}

const handleFilter = (newObject: Filter) => {
  filter.value = newObject;
  // 取出 status 的 value 值
  if (newObject.id === "status") {
    filterStatus.value = newObject.value;
  }
  console.log("filter", filter.value, filterStatus.value);
  fetchData();
};
</script>
<style lang="sass"></style>
