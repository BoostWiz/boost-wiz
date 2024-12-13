import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom Style to className',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'active', 'disabled', 'cancel', 'outline'],
      description: '버튼 스타일 색상 (배경, 텍스트 색상, 호버시 색상)',
    },
    rounded: {
      control: { type: 'select' },
      options: ['small', 'medium', 'hard'],
      description: 'border-radius 입니다.',
    },
    height: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '버튼의 height',
    },
    children: {
      control: 'text',
      description: '텍스트가 올 수 있수도 있으며 컴포넌트가 올 수 있습니다.',
      defaultValue: 'Button',
    },
    asChild: {
      control: 'boolean',
      description:
        '사용자가 컴포넌트의 기본 태그(예: <button>) 대신 다른 태그를 사용할때 true로.',
      defaultValue: false,
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    height: 'sm',
    children: <span className="text-xs">Default</span>,
  },
};

export const DisabledButton: Story = {
  args: {
    variant: 'disabled',
    height: 'md',
    children: <span className="text-xs">Disabled</span>,
  },
};

export const LargeButton: Story = {
  args: {
    variant: 'active',
    height: 'lg',
    rounded: 'hard',
    children: <span className="text-md">Large</span>,
  },
};

export const CustomButton: Story = {
  args: {
    variant: 'default',
    height: 'md',
    children: <span className="text-xs">Custom</span>,
    className: 'bg-turquoise',
  },
};
