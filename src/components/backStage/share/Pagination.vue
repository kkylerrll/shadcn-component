<template>
  <div class="flex gap-8">
    <Pagination
      v-slot="{ page }"
      :total="100"
      :sibling-count="1"
      show-edges
      :default-page="2"
    >
      <PaginationList v-slot="{ items }" class="flex items-center gap-6">
        <PaginationPrev />

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
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>
          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>

        <PaginationNext />
      </PaginationList>
    </Pagination>
    <div class="flex gap-4">
      <p class="m-auto">跳至</p>
      <Input type="number" size="numberMd" class="max-w-[50px]" />
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
</script>

<style lang="scss">
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
