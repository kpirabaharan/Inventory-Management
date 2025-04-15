import {
  Box,
  CircleDollarSign,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  User,
} from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '#',
    icon: LayoutDashboard,
  },
  {
    title: 'Inventory',
    url: '#',
    icon: Box,
  },
  {
    title: 'Products',
    url: '#',
    icon: ShoppingBag,
  },
  {
    title: 'Users',
    url: '#',
    icon: User,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
  {
    title: 'Expenses',
    url: '#',
    icon: CircleDollarSign,
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar collapsible={'icon'}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='h-12 text-lg'>
            <p className='truncate'>Inventory Management</p>
          </SidebarGroupLabel>
          <Separator />
          <SidebarGroupContent className='pt-2'>
            <SidebarMenu>
              {items.map(({ title, icon: Icon, url }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton className='h-12' asChild>
                    <a href={url}>
                      <Icon />
                      <span>{title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};
