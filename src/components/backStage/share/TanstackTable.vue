<template>
  <div class="table-container">
    <Table class="w-full">
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
          class="headerRow"
        >
          <!-- 自動排序 -->
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            scope="col"
            @click="header.column.getToggleSortingHandler()?.($event)"
          >
            <template class="flex gap-5 items-center cursor-pointer">
              <FlexRender
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
              <SortBtn :header="header"></SortBtn>
            </template>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-for="row in table.getRowModel().rows" :key="row.id">
          <TableRow :data-state="row.getIsSelected() && 'selected'">
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
          <TableRow
            v-if="row.getIsExpanded()"
            :key="row.id + '-expanded'"
            class="expanded-row"
          >
            <TableCell :colspan="cellLength(row)">
              <pre :style="{ fontSize: '10px' }">
                  <code>{{ JSON.stringify(row.original, null, 2) }}</code>
                </pre>
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
    <!-- <Pagination
      :page="page"
      :total="total"
      :totalPage="totalPage"
      @pageChange="setPage"
    ></Pagination> -->
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, h, computed, onMounted, provide } from "vue";
import { Button } from "@/components/ui/button";
import SortBtn from "./SortBtn.vue";
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

import type { Task } from "@/page/Table/schema";
import type {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  ExpandedState,
} from "@tanstack/vue-table";
import { valueUpdater } from "@/lib/utils";

interface DataTableProps {
  columns: ColumnDef<Task, any>[];
  data: Task[];
}
const props = defineProps<DataTableProps>();

const emit = defineEmits(["sortingChanged", "tableInstance", "handleFilter"]);
// const page = ref(1); // 當前頁碼
// const total = computed(() => props.data.total || 1);
// const totalPage = computed<number>(() => props.data.total_pages || 1);
const cellLength = (row: {
  getAllCells: () => { (): any; new (): any; length: any };
}) => {
  return row.getAllCells().length;
};
const sorting = ref<SortingState>([]); // 排序資料
const columnFilters = ref<ColumnFiltersState>([]); // 過濾資料
const expanded = ref<ExpandedState>({}); // 展開

const table = useVueTable({
  data: computed(() => props.data),
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getRowCanExpand: () => true,
  getExpandedRowModel: getExpandedRowModel(),
  state: {
    get sorting() {
      return sorting.value;
    },
    get columnFilters() {
      return columnFilters.value;
    },
    get expanded() {
      return expanded.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    valueUpdater(updaterOrValue, sorting);
    emit("sortingChanged", sorting.value[0]);
    console.log("sorting", sorting.value[0]);
  },
  onColumnFiltersChange: (updaterOrValue) => {
    valueUpdater(updaterOrValue, columnFilters);
    emit("handleFilter", columnFilters.value[0]);
    console.log("columnFilters", columnFilters.value);
  },
  onExpandedChange: (updaterOrValue) => {
    valueUpdater(updaterOrValue, expanded);
  },
});

// const setPage = (newPage: number) => {
//   emit("pageChange", newPage);
// };
onMounted(() => {
  emit("tableInstance", table); // 提供table實例
});
</script>
<style lang="sass"></style>
