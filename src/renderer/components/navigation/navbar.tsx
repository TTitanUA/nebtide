import { House, Settings } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

import { Typography } from '@/components/ui/typography';
import { RoutesEnum } from '@/routes/routes';

export const Navbar = () => {
  return (
    <div className='h-screen bg-zinc-50 dark:bg-zinc-800 p-2 border border-none shadow-lg rounded-r-3xl flex flex-col gap-y-10'>
      <Typography className='text-4xl font-black mt-2.5' color='secondary' variant='h2'>
        Nebtide
      </Typography>

      <nav className='space-y-2.5'>
        <Link
          className='flex items-center gap-x-2.5 p-2.5 rounded-lg duration-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700'
          to={RoutesEnum.HOME}>
          <House className='size-7 text-primary' />
          <Typography className='font-bold text-xl' variant='span'>
            Home
          </Typography>
        </Link>

        <Link
          className='flex items-center gap-x-2.5 p-2.5 rounded-lg duration-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700'
          to={RoutesEnum.SETTINGS}>
          <Settings className='size-7 text-primary' />
          <Typography className='font-bold text-xl' variant='span'>
            Settings
          </Typography>
        </Link>
      </nav>
    </div>
  );
};
