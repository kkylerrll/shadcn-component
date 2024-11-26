<template>
  <div class="flex gap-8 flex-wrap">
    <Input v-model="filterWorkname" />
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
    <VueDatePicker
      v-model="date"
      range
      :multi-calendars="{ solo: true }"
      text-input
      locale="zh-tw"
      format="yyyy-MM-dd HH:mm"
      placeholder="請選擇起始時間 ⇀ 請選擇結束時間"
      :day-names="['一', '二', '三', '四', '五', '六', '日']"
    ></VueDatePicker>
    <VueDatePicker
      v-model="date"
      range
      :multi-calendars="{ solo: true }"
      text-input
      locale="zh-tw"
      format="yyyy-MM-dd"
      :enable-time-picker="false"
      placeholder="沒有時間"
      :day-names="['一', '二', '三', '四', '五', '六', '日']"
    ></VueDatePicker>
    <VueDatePicker
      v-model="month"
      month-picker
      range
      placeholder="只有年月"
      format="yyyy-MM"
      multi-calendars
    ></VueDatePicker>
    <Button variant="outline" @click="handleClear">清空</Button>
    <Button @click="handleFilter">搜尋</Button>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { Input } from "@/components/ui/input";
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
  import VueDatePicker from "@vuepic/vue-datepicker";
  import "@vuepic/vue-datepicker/dist/main.css";
  // import { zh-TW } from "date-fns/locale";
  const props = defineProps({
    table: {
      type: Object,
      required: true,
    },
  });

  const date = ref();
  const month = ref();

  // const table = inject("tableInstance");
  const filterStatus = ref(""); // 狀態過濾
  const filterWorkname = ref(""); // user name 過濾
  const handleFilter = () => {
    const filters = [];
    if (filterStatus.value) {
      filters.push({ id: "status", value: filterStatus.value });
    }
    if (filterWorkname.value) {
      filters.push({ id: "workname", value: filterWorkname.value });
    }
    console.log("filterStatus", filterStatus.value);
    console.log("filterWorkname", filterWorkname.value);
    console.log("filters", filters);
    props.table.setColumnFilters(filters);
  };
  const handleClear = () => {
    console.log("date", date.value, "month", month.value);
  };
</script>
<style>
  .dp__range_start,
  .dp__range_end,
  .dp__active_date {
    background: #ff7635;
  }
  .dp__today {
    border: 1px solid #ff7635;
  }
  .dp__action_buttons .dp__action_select {
    background: #ff7635;
  }
  .dp__range_between {
    background: #fff8f5;
    border: 0;
  }
  .dp__action_select:hover {
    background: #ff7635;
  }
  .dp__input {
    border: 1px solid #bfbfbf;
  }
</style>
