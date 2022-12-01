interface Props {
  text?: string;
  triggeredEvent?: any;
}

export const ButtonPrimary: React.FC<Props> = ({
  text,
  triggeredEvent,
}): JSX.Element => {
  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md theme-primary px-4 py-2 text-base font-medium text-white focus:outline-none text-xs"
      onClick={() => triggeredEvent()}
    >
      {text}
    </button>
  );
};
