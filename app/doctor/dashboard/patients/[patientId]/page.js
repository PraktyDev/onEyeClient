import { Dot, PlusCircle, User } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const page = () => {
  return (
    <section className='flex flex-col laptop:flex-row gap-2 mt-2 text-[#0A416F]'>
      <div className='basis-2/4 gap-2 flex flex-col items-center'>
        <div className='flex flex-col gap-4 mb-4 w-full'>
          <p className='font-light text-xl cursor-default text-white opacity-70'>Praise Full Details</p>
          <div className='flex gap-10 flex-wrap'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col text-nowrap'>
                <span className='font-light text-xs cursor-default'>Patient name</span>
                <span className='font-semibold text-base'>Praise Akintayo</span>
              </div>
              <div className='flex flex-col text-nowrap'>
                <span className='font-light text-xs cursor-default'>Contact</span>
                <span className='font-semibold text-base'>12345678</span>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div className='flex flex-col text-nowrap'>
                <span className='font-light text-xs cursor-default'>Gender</span>
                <span className='font-semibold text-base'>Male</span>
              </div>
              <div className='flex flex-col text-nowrap'>
                <span className='font-light text-xs cursor-default'>DOB</span>
                <span className='font-semibold text-base'>12/12/1900</span>
              </div>
            </div>

            <div className='flex flex-col justify-end'>
              <div className='flex flex-col text-nowrap'>
                <span className='font-light text-xs cursor-default'>Patient Id</span>
                <span className='font-semibold text-base'>ON-000001</span>
              </div>
            </div>

            <div className='bg-[#8BC2F2] rounded-md flex h-8 gap-5 justify-center items-center -mt-5 px-3 py-1 cursor-default'>
              <div className='flex flex-row items-center justify-center'> 
                <Dot color='white' className='-ml-2.5'/>
                <p className='text-sm text-nowrap text-white'>Previous Visit</p>
              </div>
              <div className='bg-[#0A416F] p-2 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white'>0</div>
            </div>
            
          </div>
        </div>

        <Card className='text-[#0A416F] relative w-full'>
          <CardHeader className='py-0'>
            <CardTitle className='px-4 uppercase mt-4 text-center text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>Visual Acuity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead className='text-nowrap text-center'>OD (Dist)</TableHead>
                  <TableHead className='text-nowrap text-center'>OS (Dist)</TableHead>
                  <TableHead className='text-nowrap text-center'>OD (Near)</TableHead>
                  <TableHead className='text-nowrap text-center'>OS (Near)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Unaided</TableCell>
                  <TableCell className='text-center'>6/9</TableCell>
                  <TableCell className='text-center'>6/12</TableCell>
                  <TableCell className='text-center'>N6</TableCell>
                  <TableCell className='text-center'>N6</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Pinhole</TableCell>
                  <TableCell className='text-center'>6/9</TableCell>
                  <TableCell className='text-center'>6/6+</TableCell>
                  <TableCell className='text-center'>N6</TableCell>
                  <TableCell className='text-center'>N6</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Aided</TableCell>
                  <TableCell className='text-center'>6/6</TableCell>
                  <TableCell className='text-center'>6/6</TableCell>
                  <TableCell className='text-center'>N6</TableCell>
                  <TableCell className='text-center'>N6</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button className='bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 items-center justify-center gap-2 absolute bottom-0 right-0 rounded-sm'>
              <PlusCircle size={15} />
              <p className='text-xs'>Others</p>
            </Button>
          </CardContent>
        </Card>


        <div className='flex flex-col tablet:flex-row gap-2 w-full'>
          <Card className='w-full text-[#0A416F] pt-6'>
            <CardContent>
              <div className='flex flex-col gap-2'>
                <p className='px-4 uppercase text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>Confrontation Test</p>
                <Table className='-mt-2'>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-center'>SUP</TableHead>
                      <TableHead className='text-center'>INF</TableHead>
                      <TableHead className='text-center'>NAS</TableHead>
                      <TableHead className='text-center'>TEM</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-extrabold text-center">+</TableCell>
                      <TableCell className="font-extrabold text-center">+</TableCell>
                      <TableCell className="font-extrabold text-center">+</TableCell>
                      <TableCell className="font-extrabold text-center">+</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='px-4 uppercase text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>Color Vison</p>
                <Table className='-mt-2'>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-center'>OD</TableHead>
                      <TableHead className='text-center'>OS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-center">wnl</TableCell>
                      <TableCell className="font-medium text-center">wnl</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='px-4 text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>IOP <span className='text-xs font-medium'>(mmHg)</span></p>
                <Table className='-mt-2'>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-center'>OD</TableHead>
                      <TableHead className='text-center'>OS</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-center">21</TableCell>
                      <TableCell className="font-medium text-center">19</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className='w-full text-[#0A416F] pt-6'>
            <CardContent className='flex flex-col gap-10'>
              <div className='flex justify-between items-center'>
                <p className='font-bold uppercase bg-[#8BC2F2] text-white h-10 w-10 rounded-sm flex items-center justify-center'><span>BP</span></p>
                <div className="flex items-center justify-center basis-3/4 text-center font-semibold border h-10 rounded-md border-slate-200 gap-2">120/80 <span className='font-light text-xs'>mmHg</span></div>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='px-4 text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>BLOOD SUGAR <span className='text-xs font-medium'>(mg/dL)</span></p>
                <Table className='-mt-2'>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-center'>Random</TableHead>
                      <TableHead className='text-center'>Fasting</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-center">190</TableCell>
                      <TableCell className="font-medium text-center">105</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table className='-mt-2'>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-center'>HbA1c (%)</TableHead>
                      <TableHead className='text-center'>Triglyceride (mg/dL)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-center">5.6</TableCell>
                      <TableCell className="font-medium text-center">105</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table className='-mt-2'>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='text-center'>HDL (mg/dL)</TableHead>
                      <TableHead className='text-center'>LDL (mg/dL)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium text-center">64</TableCell>
                      <TableCell className="font-medium text-center">125</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        <Button className='hidden laptop:block w-1/2 bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>Add Diagnosis</Button>
      </div>

      <Card className='h-full w-full basis-2/4 text-[#0A416F]'>
        <CardContent className='my-5 flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-semibold'>History and Compliant</h3>
            <div className='flex items-center justify-center p-2 bg-[#8BC2F2] rounded-full'>
              <User color='white' />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='px-4 uppercase text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>Chief Compliant</p>
            <Table className='-mt-2'>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-left'>Compliant</TableHead>
                  <TableHead className='text-center'>Duration</TableHead>
                  <TableHead className='text-center'>Unit</TableHead>
                  <TableHead className='text-center'>Eye</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-left">Headache</TableCell>
                  <TableCell className="font-medium text-center">2</TableCell>
                  <TableCell className="font-medium text-center">days</TableCell>
                  <TableCell className="font-medium text-center">-</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='px-4 uppercase text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>Ocular History</p>
            <Table className='-mt-2'>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-left'>Condition</TableHead>
                  <TableHead className='text-center'>Duration</TableHead>
                  <TableHead className='text-center'>Unit</TableHead>
                  <TableHead className='text-center'>Eye</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-left">Astigmatism</TableCell>
                  <TableCell className="font-medium text-center">4</TableCell>
                  <TableCell className="font-medium text-center">years</TableCell>
                  <TableCell className="font-medium text-center">OU</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='px-4 uppercase text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>Systemic History</p>
            <Table className='-mt-2'>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-left'>Condition</TableHead>
                  <TableHead className='text-center'>Duration</TableHead>
                  <TableHead className='text-center'>Unit</TableHead>
                  <TableHead className='text-center'>Medication</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-left">Headache</TableCell>
                  <TableCell className="font-medium text-center">2</TableCell>
                  <TableCell className="font-medium text-center">days</TableCell>
                  <TableCell className="font-medium text-center">Paracetamol</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='px-4 uppercase text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>Family History</p>
            <Table className='-mt-2'>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-left'>Condition</TableHead>
                  <TableHead className='text-center'>Relation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-left">Cataract</TableCell>
                  <TableCell className="font-medium text-center">Grandmother</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='px-4 uppercase text-sm bg-[#8BC2F2] text-white rounded-sm font-semibold py-1'>Allergy</p>
            <Table className='-mt-2'>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-left'>Condition</TableHead>
                  <TableHead className='text-center'>Medication</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-left">N/A/O</TableCell>
                  <TableCell className="font-medium text-center">nil</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <Button className='block mx-auto laptop:hidden w-1/2 bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>Add Diagnosis</Button>
    </section>
  )
}

export default page