import tw, { css } from 'twin.macro';

interface Props {
  text: string;
}

const VButton = ({ text }: Props) => {
  return (
    <button
      type="button"
      className="text-[red]"
      css={[
        tw`text-[48px]`,
        css`
          &:hover {
            color: blue;
          }
        `,
      ]}
    >
      {text}
    </button>
  );
};

export default VButton;
