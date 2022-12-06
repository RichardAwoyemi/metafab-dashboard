import { useState } from "react";
import Image from "next/image";
import { LogoSecondary } from "./LogoSecondary";
import DashboardHeaderSearch from "./DashboardHeaderSearch";
import DashboardHeaderUser from "./DashboardHeaderUser";

interface Props {
  user: string;
}

export default function Dashboard(props: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="flex justify-between items-center gap-x-32 py-3 px-5 border-b border-white/5">
      <div className="flex gap-x-2">
        <LogoSecondary />
      </div>
      <DashboardHeaderSearch onChange={setSearchTerm} />
      <DashboardHeaderUser user={props.user} email={props.user} />
    </div>
  );
}
