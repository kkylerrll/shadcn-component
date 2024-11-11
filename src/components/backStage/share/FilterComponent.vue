<template>
  <div class="flex gap-8">
    <!-- 下拉選單 狀態過濾 -->
    <Select v-model="filterStatus">
      <SelectTrigger>
        <SelectValue placeholder="全部" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="0">全部</SelectItem>
          <SelectItem value="1">公開</SelectItem>
          <SelectItem value="2">不公開</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Button variant="outline">清空</Button>
    <Button @click="handleFilter">搜尋</Button>
  </div>
</template>
<script lang="ts" setup>
import { ref, inject, Ref } from "vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const props = defineProps({
  table: {
    type: Object,
    required: true,
  },
  column: {
    type: Object,
    required: true,
  },
});
// const table = inject("tableInstance");
const filterStatus = ref(""); // 狀態過濾
const handleFilter = () => {
  const filters = [];
  if (filterStatus.value) {
    filters.push({ id: "status", value: filterStatus.value });
  }
  console.log("filterStatus", filterStatus.value);
  console.log("filters", filters);
  props.table.setColumnFilters(filters);
};
</script>
<style></style>
