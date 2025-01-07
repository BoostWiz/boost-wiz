/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { fn } from '@storybook/test';

import { Tabs } from '.';

const meta = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {
    currentTab: {
      control: { type: 'select' },
      options: ['구단 소개', '구단 연혁'],
      description: '현재 클릭한 tab을 상태로 받기 입니다.',
    },
    tabsData: {
      control: 'object',
      description:
        'Tabs 에 들어가는 각 객체 형태로, 데이터는 text는 필수고 router는 옵셔널입니다.',
    },
  },
  args: {
    onTabChange: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentTab: '구단 소개',
    tabsData: ['구단 소개', '구단 연혁'],
    onTabChange: fn(),
  },
  render: (args) => {
    const [{ currentTab }, updateArgs] = useArgs();
    const handleTabChange = (newTab: string) => {
      // 컴포넌트 변경하기
      updateArgs({ currentTab: newTab });
    };

    return (
      <Tabs {...args} currentTab={currentTab} onTabChange={handleTabChange} />
    );
  },
};
