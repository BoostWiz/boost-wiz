import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

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
      options: ['activate', 'cancel', 'not-activate'],
      description: '버튼 스타일 색상 (배경, 텍스트 색상, 호버시 색상)',
    },
    size: {
      control: { type: 'select' },
      options: ['activate', 'sm', 'lg', 'icon'],
      description: '버튼의 size + border radius',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트가 올 수도 있고, 이미지가 올 수도 있습니다.',
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
    variant: 'activate',
    size: 'activate',
    children: '삭제 버튼',
  },
};

export const LargeButton: Story = {
  args: {
    variant: 'not-activate',
    size: 'lg',
    children: '라지 버튼',
  },
};
