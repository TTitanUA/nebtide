import React, { FC } from 'react';

import { SystemThemeProps } from '@/hooks/useSystemTheme';
import { cn } from '@/utils/cn';

export const MainBackground: FC<{
  theme: SystemThemeProps;
}> = ({ theme }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 -z-10 h-full w-full',
        theme === 'dark'
          ? 'bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'
          : 'bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'
      )}
    />
  );
};
