import { cva, type VariantProps } from "class-variance-authority";
export { default as Label } from "./Label.vue";

export const labelVariants = cva(
  "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
      },
      size: {
        default: "ml-2 text-fz5",
        secondary: "ml-1 text-fz3",
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
export type LabelVariants = VariantProps<typeof labelVariants>;
