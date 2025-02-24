import React, { ElementType, FC, PropsWithChildren } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const typographyVariants = cva('font-normal', {
  defaultVariants: {
    color: 'neutral'
  },
  variants: {
    color: {
      accent: 'text-accent',
      'accent-content': 'text-accent-content',
      base: 'text-base-content',
      error: 'text-error',
      'error-content': 'text-error-content',
      info: 'text-info',
      'info-content': 'text-info-content',
      neutral: 'text-neutral dark:text-neutral-content',
      primary: 'text-primary',
      'primary-content': 'text-primary-content',
      secondary: 'text-secondary',
      'secondary-content': 'text-secondary-content',
      success: 'text-success',
      'success-content': 'text-success-content',
      warning: 'text-warning',
      'warning-content': 'text-warning-content'
    }
  }
});

interface TypographyProps extends VariantProps<typeof typographyVariants>, PropsWithChildren {
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const Typography: FC<TypographyProps> = ({ children, className, color, variant = 'p' }) => {
  const Component = variant as ElementType;

  return <Component className={cn(typographyVariants({ className, color }))}>{children}</Component>;
};
