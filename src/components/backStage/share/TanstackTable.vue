<template>
  <div class="table-container flex-1">
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
            <FlexRender
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
            <!-- <sortBtn :header="header"></sortBtn> -->
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            :data-state="row.getIsSelected() && 'selected'"
          >
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
    <Pagination
      v-slot="{ page }"
      :total="total"
      :sibling-count="1"
      show-edges
      :default-page="page"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-1">
        <PaginationFirst />
        <PaginationPrev />
        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              class="w-10 h-10 p-0"
              :variant="item.value === page ? 'default' : 'outline'"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>
        <PaginationNext />
        <PaginationLast />
      </PaginationList>
    </Pagination>
  </div>
</template>
<script lang="ts" setup>
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
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";

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
import type { ColumnDef } from "@tanstack/vue-table";

interface DataTableProps {
  columns: ColumnDef<Task, any>[];
  data: Task[];
}
const props = defineProps<DataTableProps>();

// const computedData = computed(() => props.data);

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

watch(
  () => props.data,
  (newData) => {
    if (newData && newData.length > 0) {
      console.log("Data updated:", newData); // 僅當有有效資料時才執行
    }
  },
  { immediate: true }
);

const setPage = () => {};
</script>
<style lang="sass"></style>
