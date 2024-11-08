'use client'
import DocNav from "@/components/DocNav";
import DocSideNav from "@/components/DocSideNav";
import { useState } from "react";


export default function DoctorDashboardLayout({ children }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div className='flex mx-2 laptop:mx-0'>
        <div className='hidden laptop:block fixed z-10'>
          <DocSideNav
            isExpanded={isSidebarExpanded}
            isHovered={isSidebarHovered}
            toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
            onSidebarEnter={() => setIsSidebarHovered(true)}
            onSidebarLeave={() => setIsSidebarHovered(false)}
          />
        </div>

        <div
          className={`flex flex-col transition-all duration-700 w-full ${
            isSidebarExpanded ? "laptop:pl-[142px]" : ""
          } laptop:mr-[11px] my-[11px] laptop:ml-[71px] grow`}
        >
          <DocNav />
          {children}
        </div>
    </div>    
  );
}
