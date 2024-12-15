import type { Meta, StoryObj } from '@storybook/react';

import Footer from '.';

const meta = {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
