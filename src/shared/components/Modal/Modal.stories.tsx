import type { Meta, StoryObj } from '@storybook/react';

import { DialogClose, Modal } from '.';
import { Button } from '../Button';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: { disable: true },
  },
  tags: ['autodocs'],
  decorators: [(Story) => <Story />],
  argTypes: {
    triggerElement: {
      control: false,
      description: '필수 값으로, 모달을 열리도록 하는 트리거 버튼',
    },
    isClosedIcon: {
      control: 'boolean',
      description: 'X icon 여부로 옵셔널로 default 값은 false.',
      defaultValue: false,
    },
    titleElement: {
      control: false,
      description:
        '타이틀 값은 필수값으로, 범용성을 위해 Node Element로 받습니다.',
    },
    description: {
      control: 'text',
      description: 'description은 옵셔널로 받습니다.',
    },
    children: {
      control: false,
      description:
        '여러 컴포넌트들이 올 수 있다 생각하여 children으로 받도록 했습니다.',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    triggerElement: <Button>Trigger Button</Button>,
    isClosedIcon: true,
    titleElement: (
      <div>
        <span className="font-bold font-lg text-black">
          개인정보 수집·이용 동의
        </span>
      </div>
    ),
  },
};

export const WithButton: Story = {
  args: {
    triggerElement: <Button>Trigger Button</Button>,
    titleElement: (
      <div>
        <span className="font-bold font-lg text-black">
          개인정보 수집·이용 동의
        </span>
      </div>
    ),
    children: (
      <div className="w-full flex gap-2">
        <DialogClose asChild>
          <Button className="flex-1">취소</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button className="flex-1">확인</Button>
        </DialogClose>
      </div>
    ),
  },
};

export const WithDescriptionAndButton: Story = {
  args: {
    triggerElement: <Button>Trigger Button</Button>,
    titleElement: (
      <div>
        <span className="font-bold font-lg text-black">
          개인정보 수집·이용 동의
        </span>
      </div>
    ),
    description: 'kt wiz는 팬들의 개인정보를 소중히 다루고 있습니다.',
    children: (
      <div className="w-full flex gap-2">
        <DialogClose asChild>
          <Button className="flex-1">취소</Button>
        </DialogClose>

        <Button className="flex-1">전환</Button>
      </div>
    ),
  },
};
