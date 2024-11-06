<template>
  <div class="flex items-center">
    <Checkbox id="test" class="w-[16px] h-[16px]" />
    <Label for="test" class="labelText"
      >我是<span class="text-primary">Label</span></Label
    >
  </div>
  <div class="flex items-center mt-2">
    <Checkbox id="front" class="w-[16px] h-[16px]" />
    <Label for="front" class="labelText" size="secondary">我是前台Label</Label>
  </div>
</template>

<script lang="ts" setup>
  import { Label } from "@/components/ui/label";
  import { Checkbox } from "@/components/ui/checkbox";
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

<style lang="scss" scoped>
  .labelText {
    color: #fff;
  }
</style>
