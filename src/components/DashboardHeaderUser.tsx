import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  user: string;
  email: string;
}

export default function DashboardHeaderUser(props: Props) {
  return (
    <div className="flex gap-x-2 items-center pr-12">
      <div className="relative h-8 w-8">
        <Image src="/dummy-avatar.svg" alt="user-avatar" fill={true} />
      </div>
      <div className="text-xs">
        <p className="text-white">{props.user}</p>
        <p className="text-white/50">{props.email}</p>
      </div>
    </div>
  );
}
