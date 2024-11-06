<script setup lang="ts">
  import { cn } from "@/lib/utils";
  import { Label, type LabelProps } from "radix-vue";
  import { computed, type HTMLAttributes } from "vue";
  import { type LabelVariants, labelVariants } from ".";

  const props = defineProps<
    LabelProps & {
      class?: HTMLAttributes["class"];
      variant?: LabelVariants["variant"];
      size?: LabelVariants["size"];
    }
  >();

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });
</script>

<template>
  <Label
    v-bind="delegatedProps"
    :class="cn(labelVariants({ variant, size }), props.class)"
  >
    <slot />
  </Label>
</template>
