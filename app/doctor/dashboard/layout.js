// export default function DoctorDashboardLayout({ children }) {
//     return (
//     <div className="bg-slate-200 min-h-screen h-full flex flex-col w-full">
//         <DocSideNav />
//         {/* <div className="flex flex-col w-full"> */}
//             <DocNav />
//             {children}
//         {/* </div> */}
//     </div>
//     );
//   }
'use client'
import DocNav from "@/components/DocNav";
import DocSideNav from "@/components/DocSideNav";
import { useState } from "react";


export default function DoctorDashboardLayout({ children }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div className='flex mx-1 laptop:mx-0'>
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
