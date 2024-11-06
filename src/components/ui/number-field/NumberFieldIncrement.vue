<script setup lang="ts">
  import type { NumberFieldIncrementProps } from "radix-vue";
  import { cn } from "@/lib/utils";
  import { Plus } from "lucide-vue-next";
  import { NumberFieldIncrement, useForwardProps } from "radix-vue";
  import { computed, type HTMLAttributes } from "vue";
  import { type IncrementVariants, incrementVariants } from ".";

  const props = defineProps<
    NumberFieldIncrementProps & {
      class?: HTMLAttributes["class"];
      variant?: IncrementVariants["variant"];
      size?: IncrementVariants["size"];
    }
  >();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });

  const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <NumberFieldIncrement
    data-slot="increment"
    v-bind="forwarded"
    :class="cn(incrementVariants({ variant, size }), props.class)"
  >
    <slot>
      <!-- <Plus class="h-16 w-16" /> -->
      <svgIcon name="plus" />
    </slot>
  </NumberFieldIncrement>
</template>
