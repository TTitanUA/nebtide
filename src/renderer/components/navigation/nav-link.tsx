import { House, Settings } from 'lucide-react';
import React, { ComponentPropsWithoutRef, FC } from 'react';
import { NavLink as Link } from 'react-router';

import { Typography } from '@/components/ui/typography';
import { RoutesEnum } from '@/routes/routes';
import { cn } from '@/utils/cn';

interface CustomNavLinkProps {
  className?: ComponentPropsWithoutRef<'a'>['className'];
  href: RoutesEnum;
  label: string;
}

export const NavLink: FC<CustomNavLinkProps> = ({ className, href, label, ...props }) => {
  const renderIcon = () => {
    switch (href) {
      case RoutesEnum.HOME:
        return <House className='size-7 text-primary' />;
      case RoutesEnum.SETTINGS:
        return <Settings className='size-7 text-primary' />;
      default:
        return null;
    }
  };

  return (
    <Link
      className={({ isActive }) =>
        cn(
          'flex items-center gap-x-2.5 p-2.5 rounded-lg duration-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700',
          isActive ? 'bg-slate-100 dark:bg-slate-700' : '',
          className
        )
      }
      to={href}
      {...props}>
      {renderIcon()}

      <Typography className='font-bold text-xl' variant='span'>
        {label}
      </Typography>
    </Link>
  );
};
