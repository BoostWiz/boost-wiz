import type { Meta, StoryObj } from '@storybook/react';

import CardScheduleList from '.';

const meta = {
  title: 'CardScheduleList',
  component: CardScheduleList,
  parameters: {
    layout: 'centered',
    docs: { disable: true },
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {},
} satisfies Meta<typeof CardScheduleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
