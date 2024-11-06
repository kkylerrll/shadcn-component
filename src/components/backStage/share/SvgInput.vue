<template>
  <div class="relative">
    <Input variant="secondary" size="secondary" :placeholder="placeholder" />
    <span class="absolute bottom-[18px] left-11">
      <svgIcon :name="iconName" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { Input } from "@/components/ui/input";

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
