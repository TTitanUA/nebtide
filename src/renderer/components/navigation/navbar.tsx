import React from 'react';

import { NavLink } from '@/components/navigation/nav-link';
import { Typography } from '@/components/ui/typography';
import { RoutesEnum } from '@/routes/routes';

export const Navbar = () => {
  return (
    <div className='h-screen bg-zinc-50 dark:bg-zinc-800 py-4.5 px-4 border border-none shadow-lg rounded-r-3xl flex flex-col gap-y-10'>
      <Typography className='text-4xl font-black' color='secondary' variant='h2'>
        Nebtide
      </Typography>

      <nav className='space-y-2.5'>
        <NavLink href={RoutesEnum.HOME} label='Home' />
        <NavLink href={RoutesEnum.SETTINGS} label='Settings' />
      </nav>
    </div>
  );
};
