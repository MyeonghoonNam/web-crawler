import type { StoryFn } from '@storybook/react';
import { Button } from '@/components';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export const Default: StoryFn<typeof Button> = (args) => {
  return <Button {...args}>SUBMIT</Button>;
};
