import { Button } from '@/components';
import tw, { css } from 'twin.macro';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => {
  return <Button />;
};

export const Text = () => {
  return (
    <h1
      className="text-[blue]"
      css={[
        tw`inline`,
        css`
          border: solid 1px black;
        `,
      ]}
    >
      Text
    </h1>
  );
};
