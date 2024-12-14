import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300',
  {
    variants: {
      variant: {
        default: 'bg-black text-white text-center hover:bg-black/90',
        active: 'bg-primary text-white text-center hover:bg-primary/90',
        disabled: 'bg-slateGray text-center hover:bg-slateGray/90',
        cancel: 'bg-gray text-white text-center hover:bg-gray/90',
        outline: 'border border-[0.5px] border-gray text-black text-center',
      },
      rounded: {
        small: 'rounded-sm',
        medium: 'rounded-md',
        hard: 'rounded-lg',
      },
      height: {
        sm: 'h-6 px-3',
        md: 'h-8 px-4',
        lg: 'w-full h-12 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'medium',
      height: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, height, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, rounded, height, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
