import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/shared/lib/utils';

interface TabsProps {
  currentTab: string;
  tabsData: string[];
  onTabChange: (newTab: string) => void;
}

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    isActive: boolean;
  }
>(({ className, isActive, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `inline-flex min-w-[150px] border-b-[3px] ${
        isActive
          ? 'border-b-black text-black'
          : 'border-b-transparent text-white'
      } items-center justify-center whitespace-nowrap py-1.5 text-sm font-medium transition-all`,
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tabs = ({ currentTab, tabsData, onTabChange }: TabsProps) => {
  return (
    <TabsRoot value={currentTab} onValueChange={onTabChange}>
      <TabsList>
        {tabsData.map((tabData) => (
          <TabsTrigger
            key={tabData}
            value={tabData}
            isActive={currentTab === tabData}
          >
            {tabData}
          </TabsTrigger>
        ))}
      </TabsList>
    </TabsRoot>
  );
};

Tabs.displayName = 'Tabs';

export { Tabs };
