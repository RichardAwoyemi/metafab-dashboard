import Image from "next/image";

export const LogoPrimary = (): JSX.Element => {
  return (
    <>
      <div className="h-6 w-32 relative flex">
        <Image src="/logo.svg" alt="Metafab logo" fill={true} />
      </div>
      <h1 className="themed-text">Developers</h1>
    </>
  );
};
