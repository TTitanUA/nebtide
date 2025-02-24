import React, { ComponentPropsWithoutRef, FC } from 'react';
import { Outlet } from 'react-router';

import { Navbar } from '@/components/navigation/navbar';
import { MainBackground } from '@/components/ui/main-background';
import { useSystemTheme } from '@/hooks/useSystemTheme';
import { cn } from '@/utils/cn';

export const AppLayout: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...props }) => {
  const currentTheme = useSystemTheme();

  return (
    <div className='relative flex flex-1'>
      <MainBackground theme={currentTheme} />

      <Navbar />

      <div className={cn('p-5', className)} {...props}>
        <Outlet />
      </div>
    </div>
  );
};
