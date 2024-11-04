import { Dot } from 'lucide-react';
import { columns } from "./attended-patients/columns";
import { DataTable } from './attended-patients/DataTable';
import VisitChart from '@/components/VisitChart';
import PresentDataChart from '@/components/PresentDataChart';

async function getData() {[]}

const page = async () => {
  const data = getData();

  return (
    <section className="w-full laptop:container flex flex-col gap-2 mx-auto px-2">
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-xl cursor-default font-normal">Dashboard</h1>
        <div className="flex items-center gap-1 cursor-default">
          <Dot size={25} />
          <p className="text-sm -ml-2">High Priority</p>
          <div className="bg-yellow-300 text-xs flex items-center justify-center w-5 h-5 text-black font-semibold rounded-full">2</div>
        </div>
      </div>

      <div className='flex flex-col tablet:flex-row gap-2 items-center'>
        <div className='w-full tablet:basis-4/6'>
          <VisitChart />
        </div>
        <div className='w-full tablet:basis-3/6 laptop:basis-2/6'>
          <PresentDataChart />
        </div>
      </div>

      <div className="w-full mb-4">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}

export default page