'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CheckCheck, Circle, CircleDot, ExternalLink, LayoutDashboard, LoaderPinwheel } from "lucide-react"
import { Separator } from "./ui/separator"
import OnLogo from "./OnLogo"

export default function DocSideNav({ isExpanded, toggleSidebar }) {
  const pathname = usePathname()

  return (
    <div
      className={`group h-screen bg-white shadow-sm border-r border-slate-300 transition-all duration-300 ease-in-out flex flex-col items-center ${
        isExpanded ? "w-[200px]" : "w-[58px] hover:w-[200px]"
      }`}
    >
      <div className="flex items-center w-full px-2 py-5">
        <div className="bg-[#8BC2F2] flex items-center justify-center rounded-md p-1 shadow-md w-10 h-10 flex-shrink-0">
          <OnLogo />
        </div>
        <div className="overflow-hidden flex items-center justify-between grow ml-2">
          <div className='flex flex-col items-end justify-center text-right text-[#0A416F] cursor-default'>
            <h1 className='text-lg font-bold whitespace-nowrap'>ON-EYE</h1>
            <span className='text-xs -mt-2 text-right whitespace-nowrap'>TELEHEALTH</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="flex-shrink-0 transition-opacity duration-300 ease-in-out"
          >
            {isExpanded ? (
              <CircleDot color='#0A416F' className="cursor-pointer" />
            ) : (
              <Circle color='#0A416F' className="cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-10 w-full px-2 mt-5">
        <div className="flex flex-col gap-2">
          <p className={`text-xs ml-2 text-[#0A416F] ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}>Menu</p>
          <Link
            className={`link ${
              pathname === "/doctor/dashboard"
                ? "bg-[#8BC2F230] text-[#0A416F] font-semibold"
                : "text-[#0A416F] font-normal hover:bg-[#8BC2F230]"
            } p-2 rounded-md flex items-center gap-2 h-10 transition-all duration-300 ease-in-out`}
            href="/doctor/dashboard"
          >
            <p className={`link ${
              pathname === "/doctor/dashboard" ? "bg-[#0A416F] text-[#8BC2F2]" : "text-[#0A416F] bg-[#8BC2F2]"} flex items-center justify-center rounded-sm w-6 h-6 text-sm flex-shrink-0`}>
              <LayoutDashboard size={15} />
            </p>
            <p className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out">
              Dashboard
            </p>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className={`text-xs ml-2 text-[#0A416F] ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`}>Patients</p>
          <Link
            className={`link ${
              pathname === "/doctor/dashboard/waiting-patients"
                ? "bg-[#8BC2F230] text-[#0A416F] font-semibold"
                : "text-[#0A416F] font-normal hover:bg-[#8BC2F230]"
            } p-2 rounded-md flex items-center gap-2 h-10 transition-all duration-300 ease-in-out`}
            href="/doctor/dashboard/waiting-patients"
          >
            <p className={`link ${
              pathname === "/doctor/dashboard/waiting-patients" ? "bg-[#0A416F] text-[#8BC2F2]" : "text-[#0A416F] bg-[#8BC2F2]"} flex items-center justify-center rounded-sm w-6 h-6 text-sm flex-shrink-0`}>
              <LoaderPinwheel size={15} />
            </p>
            <p className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out">
              Waiting
            </p>
          </Link>
          <Link
            className={`link ${
              pathname === "/doctor/dashboard/attended-patients"
                ? "bg-[#8BC2F230] text-[#0A416F] font-semibold"
                : "text-[#0A416F] font-normal hover:bg-[#8BC2F230]"
            } p-2 rounded-md flex items-center gap-2 h-10 transition-all duration-300 ease-in-out`}
            href="/doctor/dashboard/attended-patients"
          >
            <p className={`link ${
              pathname === "/doctor/dashboard/attended-patients" ? "bg-[#0A416F] text-[#8BC2F2]" : "text-[#0A416F] bg-[#8BC2F2]"} flex items-center justify-center rounded-sm w-6 h-6 text-sm flex-shrink-0`}>
              <CheckCheck size={15} />
            </p>
            <p className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out">
              Attended
            </p>
          </Link>
          <Link
            className={`link ${
              pathname === "/doctor/dashboard/referred-patients"
                ? "bg-[#8BC2F230] text-[#0A416F] font-semibold"
                : "text-[#0A416F] font-normal hover:bg-[#8BC2F230]"
            } p-2 rounded-md flex items-center gap-2 h-10 transition-all duration-300 ease-in-out`}
            href="/doctor/dashboard/referred-patients"
          >
            <p className={`link ${
              pathname === "/doctor/dashboard/referred-patients" ? "bg-[#0A416F] text-[#8BC2F2]" : "text-[#0A416F] bg-[#8BC2F2]"} flex items-center justify-center rounded-sm w-6 h-6 text-sm flex-shrink-0`}>
              <ExternalLink size={15} />
            </p>
            <p className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out">
              Referred
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}