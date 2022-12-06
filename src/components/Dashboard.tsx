import { useState } from "react";
import Image from "next/image";
import { LogoSecondary } from "./LogoSecondary";
import DashboardHeaderSearch from "./DashboardHeaderSearch";
import DashboardHeaderUser from "./DashboardHeaderUser";
import { LogoPrimary } from "./LogoPrimary";

interface Props {
  user: string;
}

export default function Dashboard(props: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="h-screen">
      <div className="flex justify-between items-center gap-x-32 py-3 px-5 border-b border-white/5">
        <div className="flex gap-x-2 text-xs">
          <LogoPrimary paddingTop={1} />
        </div>
        <DashboardHeaderSearch onChange={setSearchTerm} />
        <DashboardHeaderUser user={props.user} email={props.user} />
      </div>
      <div className="flex h-full">
        <div className="h-full w-64"></div>
        <div className="h-full flex flex-grow border-r border-l border-white/5">
          <div className="dashboard-header-gradient absoulute top-0 w-full h-80 text-sm px-20 py-14">
            <p className="text-[#888A91] mb-5">{"Currencies"}</p>
            <h2 className="text-white font-semibold text-3xl">{"Your Currencies"}</h2>
            <p className="text-[#888A91] w-[600px]">
              {
                "Create a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority."
              }
            </p>
          </div>
        </div>
        <div className="h-full w-64"></div>
      </div>
    </div>
  );
}
