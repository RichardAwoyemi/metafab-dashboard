interface Props {
  disabled?: boolean;
  text?: string;
  triggeredEvent?: any;
}

export const ButtonPrimary: React.FC<Props> = ({
  disabled,
  text,
  triggeredEvent,
}): JSX.Element => {
  return (
    <button
      disabled={disabled}
      type="button"
      className="inline-flex w-full justify-center rounded-md theme-primary px-4 py-2 text-base font-medium text-white focus:outline-none text-xs"
      onClick={() => triggeredEvent()}
    >
      {text}
    </button>
  );
};
