import { Dot } from "lucide-react";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/columns";


const dynamic = 'force-dynamic'
async function getData() {[]}

export default function PatientsPage() {
  const data = getData();

  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center mt-4 text-[#0A416F]">
        <h1 className="text-lg tablet:text-xl cursor-default font-semibold">Referred Patients</h1>
        <div className="flex items-center gap-1 cursor-default">
          <Dot size={25} />
          <p className="text-sm -ml-2">High Priority</p>
          <div className="bg-yellow-300 text-xs flex items-center justify-center w-5 h-5 text-black font-semibold rounded-full">2</div>
        </div>
      </div>

      <div className="w-full mx-auto flex flex-col">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
