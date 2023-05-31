import { Button } from '@/components';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => {
  return <Button />;
};

export const Text = () => {
  return <span className="text-[blue]">Text</span>;
};
