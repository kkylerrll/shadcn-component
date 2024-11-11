<template>
  <div class="flex gap-8 justify-center mt-8">
    <Pagination
      v-slot="{ page }"
      :total="total"
      :sibling-count="1"
      show-edges
      :default-page="page"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-6">
        <PaginationPrev @click="setPage(page - 1)" />

        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              size="pagination"
              :variant="item.value === page ? 'paginationActive' : 'pagination'"
              @click="setPage(item.value)"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext @click="setPage(page + 1)" />
      </PaginationList>
    </Pagination>
    <div class="flex gap-4" v-if="props.totalPage > 1">
      <p class="m-auto">跳至</p>
      <Input
        v-model.number="page"
        type="number"
        size="numberMd"
        class="max-w-[50px]"
        @blur="setPage(page)"
      />
      <p class="m-auto">頁</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";

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
  import { computed, ref, watch } from "vue";
  interface DataTableProps {
    page: number;
    total: number;
    totalPage: number;
  }
  const props = defineProps<DataTableProps>();
  const emit = defineEmits(["pageChange"]);

  const page = ref(props.page);
  const total = computed(() => props.total || 1);
  const totalPage = computed(() => props.totalPage || 1);

  const setPage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPage.value) {
      page.value = newPage;
      emit("pageChange", newPage);
      console.log("setPage", newPage);
    }
  };
</script>

<style lang="scss">
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
