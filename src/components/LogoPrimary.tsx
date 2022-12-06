import Image from "next/image";

interface Props {
  paddingTop: number;
}

export const LogoPrimary = (props: Props): JSX.Element => {
  return (
    <>
      <div className="h-6 w-32 relative flex">
        <Image src="/logo.svg" alt="Metafab logo" fill={true} />
      </div>
      <h1 style={{paddingTop: props.paddingTop}} className="themed-text">Developers</h1>
    </>
  );
};
