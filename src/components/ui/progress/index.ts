import { cva, type VariantProps } from 'class-variance-authority';
export { default as Progress } from './Progress.vue'

export const progressVariants = cva(
  'relative h-5 w-full overflow-hidden rounded-full bg-secondary',
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
        sm: '',
        lg: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export type ProgressVariants = VariantProps<typeof progressVariants>;
