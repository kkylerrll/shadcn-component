<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-vue-next";
import { PaginationPrev, type PaginationPrevProps } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

const props = withDefaults(
  defineProps<PaginationPrevProps & { class?: HTMLAttributes["class"] }>(),
  {
    asChild: true,
  },
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button
      :class="cn('rounded-3xl p-6 h-auto', props.class)"
      variant="pagination"
    >
      <slot>
        <SvgIcon name="left" class="leftIcon" />
      </slot>
    </Button>
  </PaginationPrev>
</template>
<style lang="scss">
.leftIcon {
  width: 14px;
  height: 14px;
}
</style>
