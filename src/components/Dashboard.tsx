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
    <div className="h-screen overflow-hidden">
      <div className="flex justify-between items-center gap-x-32 py-3 px-5 border-b border-white/5">
        <div className="flex gap-x-2 text-xs">
          <LogoPrimary paddingTop={1} />
        </div>
        <DashboardHeaderSearch onChange={setSearchTerm} />
        <DashboardHeaderUser user={props.user} email={props.user} />
      </div>
      <div className="flex h-full">
        <div className="h-full w-64"></div>
        <div className="h-full flex flex-grow border-r border-l border-white/5 relative">
          <div className="flex w-full h-min border-b border-white/5">
            <div className="text-sm px-20 py-14">
              <p className="text-[#888A91] mb-5">{"Currencies"}</p>
              <h2 className="text-white font-semibold text-4xl mb-2">
                {"Your Currencies"}
              </h2>
              <p className="text-[#888A91] w-[600px] leading-[22px]">
                {
                  "Create a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority."
                }
              </p>
            </div>
            <div className="w-full self-center items-center justify-center">
              <div className="w-max mx-auto theme-primary h-10 self-center items-center justify-center p-[1px] rounded-[10px]">
                <button
                  style={{
                    background:
                      "linear-gradient(353.74deg, #0E0D0D 4.5%, #211F1F 154.15%)",
                    boxShadow:
                      "0px 100px 80px rgba(0, 0, 0, 0.17), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.122205), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.101338), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.085), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0686618), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0477948);",
                  }}
                  className="rounded-[10px] items-center justify-center h-full w-full text-sm font-semibold px-4 flex gap-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>

                  {"Create a Currency"}
                </button>
              </div>
            </div>
          </div>
          <div className="dashboard-header-gradient absolute top-0 w-full h-80 z-[-1]"></div>
        </div>
        <div className="h-full w-64"></div>
      </div>
    </div>
  );
}
