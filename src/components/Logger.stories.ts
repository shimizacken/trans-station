import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Logger } from './Logger.view';

const meta = {
  title: 'Components/Logger',
  component: Logger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Logger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Logger',
  },
};
