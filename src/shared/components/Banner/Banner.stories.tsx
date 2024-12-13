import type { Meta, StoryObj } from '@storybook/react';

import Banner from '.';
import { useArgs } from '@storybook/preview-api';
import { Tabs } from '../Tabs';

const meta = {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {
    title: {
      control: 'text',
      description: 'title은 필수값입니다.',
    },
    description: {
      control: 'text',
      description: 'description은 필수값 입니다.',
    },
    navList: {
      control: false,
      description: 'navList는 통째로 component 형태로 받습니다.',
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'kt wiz는?',
    description: '한국 프로야구의 ‘10번째 심장’ kt wiz를 소개합니다!',
  },
};

export const WithNavList: Story = {
  args: {
    title: 'kt wiz는?',
    description: '한국 프로야구의 ‘10번째 심장’ kt wiz를 소개합니다!',
  },
  render: (args) => {
    const [{ currentTab }, updateArgs] = useArgs();
    const handleTabChange = (newTab: string) => {
      updateArgs({ currentTab: newTab });
    };

    return (
      <Banner
        title="kt wiz는?"
        description="한국 프로야구의 ‘10번째 심장’ kt wiz를 소개합니다!"
        navList={
          <Tabs
            {...args}
            currentTab={currentTab}
            onTabChange={handleTabChange}
            tabsData={['구단 소개', '구단 연혁']}
          />
        }
      />
    );
  },
};
