import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Place holder...',
  },
};

export const WithClassInput: Story = {
  args: {
    placeholder: 'Place holder...',
    className: 'w-[300px]',
  },
};
