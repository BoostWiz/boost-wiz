import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

const meta = {
  title: 'Select',
  component: Select,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {
    defaultText: {
      control: 'text',
      description: '셀렉트 박스 초기에 보여지는 값입니다.',
    },
    size: {
      control: { type: 'select' },
      option: ['sm', 'md', 'lg'],
      description: 'width값을 sm,md,lg 값 중 하나의 타입으로 넘겨받습니다.',
    },
    onSelect: {
      control: false,
      description:
        '컴포넌트 외부에서 선택한 값을 관리할 수 있도록 onSelect 콜백을 추가 useState의 Set함수를 보내주시면 됩니다.',
    },
    itemList: {
      control: 'object',
      description: '',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultText: 'kt 그룹사 및 관련사이트',
    size: 'md',
    onSelect: () => {},
    itemList: [
      {
        value: 'regular_schedule',
        text: 'KT 정규리그',
        callbackFunc: () => console.log('정규리그로 이동 func...'),
      },
      {
        value: 'regular_boxscore',
        text: 'KT 박스스코어',
        callbackFunc: () => console.log('박스스코어로 이동 func...'),
      },
    ],
  },
};
