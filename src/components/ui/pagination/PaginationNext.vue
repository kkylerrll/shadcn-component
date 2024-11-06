<script setup lang="ts">
  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";
  import { ChevronRight } from "lucide-vue-next";
  import { PaginationNext, type PaginationNextProps } from "radix-vue";
  import { computed, type HTMLAttributes } from "vue";

  const props = withDefaults(
    defineProps<PaginationNextProps & { class?: HTMLAttributes["class"] }>(),
    {
      asChild: true,
    }
  );

  const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;

    return delegated;
  });
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <Button
      :class="cn('rounded-3xl p-6 h-auto', props.class)"
      variant="pagination"
    >
      <slot>
        <SvgIcon name="right" class="rightIcon" />
      </slot>
    </Button>
  </PaginationNext>
</template>
<style lang="scss">
  .rightIcon {
    width: 14px;
    height: 14px;
  }
</style>
