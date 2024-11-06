<script setup lang="ts">
  import { cn } from "@/lib/utils";
  import {
    ProgressIndicator,
    ProgressRoot,
    type ProgressRootProps,
  } from "radix-vue";
  import { computed, type HTMLAttributes } from "vue";
  import { type ProgressVariants, progressVariants } from ".";

  const props = withDefaults(
    defineProps<
      ProgressRootProps & {
        class?: HTMLAttributes["class"];
        variant?: ProgressVariants["variant"];
        size?: ProgressVariants["size"];
      }
    >(),
    {
      modelValue: 0,
    }
  );

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="cn(progressVariants({ variant, size }), props.class)"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 transition-all progress"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="cn(progressVariants({ variant, size }), props.class)"
    class="mt-5"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 transition-all bg-primary"
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
    />
  </ProgressRoot>
</template>

<style lang="scss" scoped>
  .progress {
    background: linear-gradient(to right, #fff8f5, #ff7635, #d95623);
  }
</style>
