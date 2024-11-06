import { cva, type VariantProps } from "class-variance-authority";
export { default as Progress } from "./Progress.vue";

export const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-secondary",
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
      },
      size: {
        default: "",
        secondary: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
export const indicatorVariants = cva(
  "w-full flex-1 transition-all bg-primary rounded-3xl",
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
      },
      size: {
        default: "p-2",
        secondary: "p-3",
        sm: "p-1",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
export type ProgressVariants = VariantProps<typeof progressVariants>;
export type IndicatorVariants = VariantProps<typeof indicatorVariants>;
