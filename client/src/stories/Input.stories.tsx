import type { StoryFn } from '@storybook/react';
import { Input } from '@/components';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const Default: StoryFn<typeof Input> = (args) => {
  return <Input {...args} />;
};
