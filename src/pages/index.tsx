import LoginModal from "../components/LoginModal";
import Image from "next/image";
import { login } from "@/features/login/UserLoginSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import Dashboard from "@/components/Dashboard";

export default function Index() {
  const activeUser = useAppSelector((state) => state.login.username);

  return (
    <div>
      <div>
        {!activeUser ? (
          <>
            <Image
              fill
              sizes="100vw"
              style={{ objectFit: "cover", zIndex: -1 }}
              quality={100}
              src={"/login-bg.png"}
              alt={"metafab-login-bg"}
            />
            <LoginModal />
          </>
        ) : (
          <div>
            <Image
              fill
              sizes="100vw"
              style={{ objectFit: "cover", zIndex: -1 }}
              quality={100}
              src={"/dashboard-bg.png"}
              alt={"metafab-dashboard-bg"}
            />
            <Dashboard user={activeUser} />
          </div>
        )}
      </div>
    </div>
  );
}
