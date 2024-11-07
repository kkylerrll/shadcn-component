<template>
  <div class="table-container">
    <Table class="w-full">
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
          class="headerRow"
          :rowIndex="1"
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
            <sortBtn :header="header"></sortBtn>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-for="row in tableRow" :key="row.id">
          <TableRow :row-index="row.index">
            <TableCell>
              <input
                :id="'checkbox-' + row.id"
                name="rowCheckbox"
                type="checkbox"
                :checked="row.original.selected"
                aria-label="Select row"
                @change="(e) => updateSelection(row.id)"
              />
            </TableCell>
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
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel, // 分頁
  getSortedRowModel, // 排序
  getFilteredRowModel, // 搜尋
  getExpandedRowModel, // 展開
} from "@tanstack/vue-table";

const props = defineProps({
  data: {
    type: Array,
    require: true,
  },
  columns: {
    type: Array,
    require: true,
  },
});
const data = ref(props.data);

const table = useVueTable({
  data: data.value || [],
  columns: props.columns || [],
});
watch(data, (newValue) => {
  console.log(newValue);
});
</script>
<style lang="sass"></style>
