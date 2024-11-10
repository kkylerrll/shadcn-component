<template>
  <div class="table-container flex-1">
    <Table class="w-full">
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
          class="headerRow"
        >
          <TableHead>
            <input
              id="select-all"
              type="checkbox"
              aria-label="Select all rows"
            />
          </TableHead>
          <!-- 自動排序 -->
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            scope="col"
            @click="header.column.getToggleSortingHandler()?.($event)"
          >
            <FlexRender
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
            <!-- <sortBtn :header="header"></sortBtn> -->
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template>
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() && 'selected'"
          >
            <TableCell :colspan="row.getAllCells().length">
              <pre :style="{ fontSize: '10px' }">
                  <code>{{ JSON.stringify(row.original, null, 2) }}</code>
                </pre>
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
    <pre>{{ JSON.stringify(props.data, null, 2) }}</pre>
  </div>
</template>
<script lang="ts" setup generic="TData">
import { ref, watch, h, computed, onMounted } from "vue";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel, // 分頁
  getSortedRowModel, // 排序
  getFilteredRowModel, // 搜尋
  getExpandedRowModel, // 展開
} from "@tanstack/vue-table";

import type { ColumnDef } from "@tanstack/vue-table";
interface DataTableProps {
  columns: ColumnDef<TData, any>[];
  data: TData[];
}
const props = defineProps<DataTableProps>();
const computedData = computed(() => props.data);
console.log("computedData", computedData.value);

const table = useVueTable({
  data: computed(() => props.data),
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
});

const updateSelection = () => {};

watch(
  () => props.data,
  (newData) => {
    console.log("Data updated:", newData); // 當 data 更新時打印資料
  },
  { immediate: true } // 立即執行一次以檢查初始資料
);
</script>
<style lang="sass"></style>
