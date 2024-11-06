import { cva, type VariantProps } from 'class-variance-authority';
export { default as NumberField } from './NumberField.vue'
export { default as NumberFieldContent } from './NumberFieldContent.vue'
export { default as NumberFieldDecrement } from './NumberFieldDecrement.vue'
export { default as NumberFieldIncrement } from './NumberFieldIncrement.vue'
export { default as NumberFieldInput } from './NumberFieldInput.vue'

export const decrementVariants = cva(
  'top-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20',
  {
    variants: {
      variant: {
        default:
          'bg-text-primary',
        secondary:
          '',
      },
      size: {
        default: 'p-2 text-fz5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export const incrementVariants = cva(
  'top-1/2 right-0 p-3 disabled:cursor-not-allowed disabled:opacity-20',
  {
    variants: {
      variant: {
        default:
          'bg-text-primary',
        secondary:
          '',
      },
      size: {
        default: 'p-2 text-fz5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export const inputVariants = cva(
  'flex w-full bg-background text-center placeholder:text-white disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-black/30 text-white text-sm',
        secondary:
          '',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export const contentVariants = cva(
  // 'relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5',
  'flex border border-text-primary rounded-md',
  {
    variants: {
      variant: {
        default:
          '',
        secondary:
          '',
      },
      size: {
        default: '',
        secondary: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export type ContentVariants = VariantProps<typeof contentVariants>;
export type DecrementVariants = VariantProps<typeof decrementVariants>;
export type IncrementVariants = VariantProps<typeof incrementVariants>;
export type InputVariants = VariantProps<typeof inputVariants>;