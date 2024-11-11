import { cva, type VariantProps } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-3xl",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 ",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-3xl",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        pagination:
          "border border-input border-text-secondary text-text-secondary bg-background hover:text-primary rounded-full",
        paginationActive: "bg-primary text-primary-foreground  rounded-full",
        verification: "rounded-l-none rounded-r-3xl bg-white/20 text-primary",
      },
      size: {
        default: "px-13 py-9 leading-none",
        sm: "rounded-3xl px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        pagination: "w-16 h-16 text-base",
        verification: "px-11 leading-none text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
