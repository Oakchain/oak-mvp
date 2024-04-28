import Link from 'next/link';
import {
  Home,
  Bell,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';


const SiderComponent = () => {
  return (
    <>
      <div className='hidden border-r bg-muted/40 md:block'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
            <Link href='/' className='flex items-center gap-2 font-semibold'>
              <Package2 className='h-6 w-6' />
              <span className=''>Oak</span>
            </Link>
          </div>
          <div className='flex-1'>
            <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
              <Link
                href='/dashboard'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <Home className='h-4 w-4' />
                Overview
              </Link>
              <Link
                href='/dashboard/savings'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <ShoppingCart className='h-4 w-4' />
                Savings
                <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>6</Badge>
              </Link>
              <Link
                href='/dashboard/payments'
                className='flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary'
              >
                <Package className='h-4 w-4' />
                Payments{' '}
              </Link>
              <Link
                href='/dashboard/budgets'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <Users className='h-4 w-4' />
                Budget
              </Link>
              <Link
                href='/dashboard/users'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <LineChart className='h-4 w-4' />
                Users
              </Link>
            </nav>
          </div>
          <div className='mt-auto p-4'>
            <div x-chunk='dashboard-02-chunk-0'>
              <nav className='p-2 pt-0 md:p-4'>
                <Link href='/dashboard/savings'>© 2023 OakChain. All Rights Reserved.</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiderComponent;
