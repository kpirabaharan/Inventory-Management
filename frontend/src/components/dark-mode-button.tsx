'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      size={'icon'}
      variant={'ghost'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='size-10'
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  );
};

export default DarkModeButton;
