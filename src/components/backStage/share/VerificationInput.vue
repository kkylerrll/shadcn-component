<template>
  <div class="flex item-center">
    <div class="relative">
      <Input
        variant="secondary"
        size="secondary"
        :placeholder="placeholder"
        class="rounded-r-none"
      />
      <span class="absolute bottom-[18px] left-11">
        <svgIcon :name="iconName" />
      </span>
    </div>
    <Button variant="verification" size="verification">請輸入驗證碼</Button>
  </div>
</template>

<script lang="ts" setup>
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  const props = defineProps({
    placeholder: {
      type: String,
      default: "",
    },
    iconName: {
      type: String,
      require: true,
    },
  });
</script>

<style></style>
