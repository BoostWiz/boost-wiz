import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from '.';

const meta = {
  title: 'Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {
    breadList: {
      control: 'object',
      description: 'id, text, router로 이루어진 객체를 배열형태로 받습니다.',
    },
    pathname: {
      control: 'text',
      description:
        '경로 pathname 통째로 받기 next/navgation 내의 usePathname 경로 그대로 넣어주시면 됩니다.',
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadList: ['Game', '정규 리그', '경기 일정'],
    pathname: '/game/schedule',
  },
};
