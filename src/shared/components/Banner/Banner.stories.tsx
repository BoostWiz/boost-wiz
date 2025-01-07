import type { Meta, StoryObj } from '@storybook/react';

import Banner from '.';
import { navData } from '../Header/constants';

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
    bgUrl: {
      control: 'text',
      description: 'bgUrl은 옵셔널 입니다.',
    },
    navData: {
      control: 'object',
      description:
        'navData는 key를 string, value는 객체로 text와 router가 들어갑니다.',
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

export const WithBgUrl: Story = {
  args: {
    title: 'kt wiz는?',
    description: '한국 프로야구의 ‘10번째 심장’ kt wiz를 소개합니다!',
    bgUrl: '/common/sample.jpg',
  },
};

export const WithNavList: Story = {
  args: {
    title: 'kt wiz는?',
    description: '한국 프로야구의 ‘10번째 심장’ kt wiz를 소개합니다!',
    navData: navData['player'].items,
  },
};
