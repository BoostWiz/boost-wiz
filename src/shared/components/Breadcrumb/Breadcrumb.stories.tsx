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
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadList: [
      { text: '정규 리그', router: 'game/schedule' },
      { text: '박스 스코어', router: 'game/boxscore' },
      { text: '순위 기록', router: 'game/ranking' },
    ],
  },
};
