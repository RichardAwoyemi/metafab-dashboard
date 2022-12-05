import LoginModal from "../components/LoginModal";
import Image from "next/image";

export default function Index() {
  return (
    <div>
      <Image
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        quality={100}
        src={"/login-bg.png"}
        alt={"metafab-login-bg"}
      />
      <LoginModal />
    </div>
  );
}
