interface Props {
  text?: string;
  triggeredEvent?: any;
}

export const ButtonSecondary: React.FC<Props> = ({
  text,
  triggeredEvent,
}): JSX.Element => {
  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md border border-bd-grey px-4 py-2 text-base font-medium text-white/50 shadow-sm hover:bg-white/[0.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-xs"
      onClick={() => triggeredEvent}
    >
      {text}
    </button>
  );
};
