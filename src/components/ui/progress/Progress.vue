<script setup lang="ts">
import { cn } from "@/lib/utils";
import {
  ProgressIndicator,
  ProgressRoot,
  type ProgressRootProps,
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";
import {
  type ProgressVariants,
  progressVariants,
  type IndicatorVariants,
  indicatorVariants,
} from ".";

const props = withDefaults(
  defineProps<
    ProgressRootProps & {
      class?: HTMLAttributes["class"];
      variant?: ProgressVariants["variant"];
      size?: ProgressVariants["size"];
      indicatorVariant?: IndicatorVariants["variant"];
      indicatorSize?: IndicatorVariants["size"];
      generate?: boolean;
    }
  >(),
  {
    modelValue: 0,
    generate: false,
  },
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
      :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
      :class="
        cn(indicatorVariants({ variant, size }), {
          progress: props.generate,
        })
      "
    />
  </ProgressRoot>
</template>

<style lang="scss" scoped>
.progress {
  background: linear-gradient(to right, #fff8f5, #ff7635, #d95623);
}
</style>
