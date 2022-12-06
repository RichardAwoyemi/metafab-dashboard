import Image from "next/image";

export const LogoSecondary = (): JSX.Element => {
  return (
    <>
      <div className="h-6 w-32 relative flex">
        <Image src="/logo-white.svg" alt="Metafab logo" fill={true} />
      </div>
      <h1 className="themed-text text-xs pt-0.5">Developers</h1>
    </>
  );
};
