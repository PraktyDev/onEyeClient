import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import TASidebar from "@/components/TASidebar"

export default function TeleAssistantDashboardLayout({ children }) {
return (
    <SidebarProvider>
    <TASidebar />
    <main className="bg-slate-200 w-screen min-h-screen h-full">
        <SidebarTrigger />
        {children}
    </main>
    </SidebarProvider>
)
}