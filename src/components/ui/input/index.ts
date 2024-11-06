import { cva, type VariantProps } from 'class-variance-authority';
export { default as Input } from './Input.vue'

export const inputVariants = cva(
  'flex w-full rounded-md leading-none border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-text-secondary placeholder:text-text-primary',
        secondary:
          'rounded-3xl border-none bg-white/20 placeholder:text-white',
      },
      size: {
        default: 'px-10 py-7 text-fz5',
        secondary: 'p-11 pl-17 text-fz5',
        numberSm: 'rounded-lg p-2',
        numberMd: 'rounded-lg p-4',
        sm: 'rounded-lg',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export type InputVariants = VariantProps<typeof inputVariants>;
