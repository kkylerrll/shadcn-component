<script setup lang="ts">
  import type { HTMLAttributes } from "vue";
  import { cn } from "@/lib/utils";
  import { type ContentVariants, contentVariants } from ".";

  const props = defineProps<{
    class?: HTMLAttributes["class"];
    variant?: ContentVariants["variant"];
    size?: ContentVariants["size"];
  }>();
</script>

<template>
  <div :class="cn(contentVariants({ variant, size }), props.class)">
    <slot />
  </div>
</template>
