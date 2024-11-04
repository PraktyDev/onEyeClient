import DocNav from "@/components/DocNav";

export default function DoctorDashboardLayout({ children }) {
    return (
    <div className="bg-slate-200 min-h-screen h-full ">
        <DocNav />
        {children}
    </div>
    );
  }
  