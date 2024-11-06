<script setup lang="ts">
  import type { NumberFieldDecrementProps } from "radix-vue";
  import { cn } from "@/lib/utils";
  import { Minus } from "lucide-vue-next";
  import { NumberFieldDecrement, useForwardProps } from "radix-vue";
  import { computed, type HTMLAttributes } from "vue";
  import { type DecrementVariants, decrementVariants } from ".";

  const props = defineProps<
    NumberFieldDecrementProps & {
      class?: HTMLAttributes["class"];
      variant?: DecrementVariants["variant"];
      size?: DecrementVariants["size"];
    }
  >();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });

  const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <NumberFieldDecrement
    data-slot="decrement"
    v-bind="forwarded"
    :class="cn(decrementVariants({ variant, size }), props.class)"
  >
    <slot>
      <SvgIcon name="minus" />
    </slot>
  </NumberFieldDecrement>
</template>
