import type { Meta, StoryObj } from '@storybook/react';

import { Logger } from './Logger.view';

const meta = {
  title: 'Components/Logger',
  component: Logger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    logs: [
      {
        id: '1',
        timestamp: new Date(),
        level: 'info',
        message: 'This is an info message',
      },
    ],
  },
};
