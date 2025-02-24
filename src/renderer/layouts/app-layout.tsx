import React, { ComponentPropsWithoutRef, FC } from 'react';
import { Outlet } from 'react-router';

import { MainBackground } from '@/components/ui/main-background';
import { useSystemTheme } from '@/hooks/useSystemTheme';
import { cn } from '@/utils/cn';

export const AppLayout: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...props }) => {
  const currentTheme = useSystemTheme();

  return (
    <div className='relative flex-1'>
      <MainBackground theme={currentTheme} />

      <div className={cn('p-5', className)} {...props}>
        <Outlet />
      </div>
    </div>
  );
};
