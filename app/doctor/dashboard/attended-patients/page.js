import { columns } from "./columns";
import { DataTable } from "./DataTable";

const dynamic = 'force-dynamic'
async function getData() {[]}

export default function PatientsPage() {
  const data = getData();

  return (
    <div className="w-full p-2 laptop:p-4 mx-auto flex flex-col">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
