interface Props {
  text: string;
}

const VButton = ({ text }: Props) => {
  return (
    <button type="button" className="text-[red]">
      {text}
    </button>
  );
};

export default VButton;
