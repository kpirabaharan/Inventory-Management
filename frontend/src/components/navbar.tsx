'use client';

import { Bell, Menu } from 'lucide-react';

import { Button } from '@/components//ui/button';
import DarkModeButton from '@/components/dark-mode-button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Navbar = () => {
  return (
    <nav className='flex w-full flex-row items-center justify-between gap-x-2 p-2'>
      <div className='flex flex-row gap-x-2'>
        <SidebarTrigger className='size-10' />
        <Button size={'icon'} variant={'ghost'} className='size-10'>
          <Menu />
        </Button>
        <Input />
      </div>
      <div className='flex flex-row gap-x-2'>
        <DarkModeButton />
        <Button variant={'ghost'} className='size-10 cursor-pointer'>
          <Bell />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
