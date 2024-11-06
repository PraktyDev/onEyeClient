"use client"
import { format } from "date-fns"
import { CalendarIcon, PlusCircle } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card, CardContent } from "./ui/card"

const Diagnosis = () => {
    const [date, setDate] = useState()

    const [showDiagnosisTable, setShowDiagnosisTable] = useState(false)
    const [showInvestigationTable, setShowInvestigationTable] = useState(false)
    const [showMedicationTable, setShowMedicationTable] = useState(false)
    const [showReferralTable, setShowReferralTable] = useState(false)

    const diagnosisRow = () => {
      setShowDiagnosisTable(true)
    }

    const investigationRow = () => {
        setShowInvestigationTable(true)
    }

    const medicationRow = () => {
        setShowMedicationTable(true)
    }

    const referralRow = () => {
        setShowReferralTable(true)
    }
  


  return (
    <section className="flex flex-col gap-2">
        <div className="flex flex-col tablet:flex-row gap-2">
            <Card className='relative w-full text-[#0A416F] pt-6'>
                <CardContent>
                    <p className='px-4 uppercase text-sm bg-[#0A416F] text-white rounded-sm font-semibold py-1'>Diagnosis</p>
                    <Table className=''>
                    <TableHeader className='bg-slate-50'>
                        <TableRow>
                            <TableHead className='text-left'>Diagnosis</TableHead>
                            <TableHead className='text-center'>Eye</TableHead>
                            <TableHead className='text-center'>Remark</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-left">Headache</TableCell>
                            <TableCell className="font-medium text-center">-</TableCell>
                            <TableCell className="font-medium text-center">no remark</TableCell>
                        </TableRow>
                        {showDiagnosisTable && (
                            <TableRow>
                                <TableCell className="font-medium text-left">Eye Strain</TableCell>
                                <TableCell className="font-medium text-center">OU</TableCell>
                                <TableCell className="font-medium text-center">no remark</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    </Table>
                </CardContent>
                <div onClick={diagnosisRow} className='cursor-default absolute bottom-0 right-6 bg-[#0A416F] px-3 text-white hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 w-20 items-center justify-center gap-2 rounded-sm'>
                    <PlusCircle size={15} />
                    <p className='text-xs'>Add</p>
                </div>
            </Card>

            <Card className='w-full text-[#0A416F] pt-6 relative'>
                <CardContent>
                    <p className='px-4 uppercase text-sm bg-[#0A416F] text-white rounded-sm font-semibold py-1'>Suggested Investigation</p>
                    <Table className=''>
                    <TableHeader className='bg-slate-50'>
                        <TableRow>
                            <TableHead className='text-left'>Investigation</TableHead>
                            <TableHead className='text-center'>Eye</TableHead>
                            <TableHead className='text-center'>Remark</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-left">Biometry</TableCell>
                            <TableCell className="font-medium text-center">-</TableCell>
                            <TableCell className="font-medium text-center">no remark</TableCell>
                        </TableRow>
                        {showInvestigationTable && (
                            <TableRow>
                                <TableCell className="font-medium text-left">CT Scan</TableCell>
                                <TableCell className="font-medium text-center">-</TableCell>
                                <TableCell className="font-medium text-center">no remark</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    </Table>
                </CardContent>
                <div onClick={investigationRow} className='cursor-default absolute bottom-0 right-6 bg-[#0A416F] px-3 text-white hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 w-20 items-center justify-center gap-2 rounded-sm'>
                    <PlusCircle size={15} />
                    <p className='text-xs'>Add</p>
                </div>
            </Card>
        </div>

        <Card className='relative w-full text-[#0A416F] pt-6'>
            <CardContent>
                <p className='px-4 uppercase text-sm bg-[#0A416F] text-white rounded-sm font-semibold py-1'>Medication</p>
                <Table className=''>
                <TableHeader className='bg-slate-50'>
                    <TableRow>
                        <TableHead className='text-left'>Medication</TableHead>
                        <TableHead className='text-center'>Dosage</TableHead>
                        <TableHead className='text-center'>Days</TableHead>
                        <TableHead className='text-center'>Route</TableHead>
                        <TableHead className='text-center'>Eye</TableHead>
                        <TableHead className='text-center'>Instructions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium text-left">Paracetamol</TableCell>
                        <TableCell className="font-medium text-center">BDS</TableCell>
                        <TableCell className="font-medium text-center">3</TableCell>
                        <TableCell className="font-medium text-center">Oral</TableCell>
                        <TableCell className="font-medium text-center">-</TableCell>
                        <TableCell className="font-medium text-center">Postprandial</TableCell>
                    </TableRow>
                    {showMedicationTable && (
                        <TableRow>
                            <TableCell className="font-medium text-left">Aspirin</TableCell>
                            <TableCell className="font-medium text-center">500 mg</TableCell>
                            <TableCell className="font-medium text-center">2</TableCell>
                            <TableCell className="font-medium text-center">Oral</TableCell>
                            <TableCell className="font-medium text-center">-</TableCell>
                            <TableCell className="font-medium text-center">Preprandial</TableCell>
                        </TableRow>
                    )}
                </TableBody>
                </Table>
            </CardContent>
            <div onClick={medicationRow} className='absolute bottom-0 right-6 bg-[#0A416F] px-3 text-white hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 w-20 items-center justify-center gap-2 rounded-sm'>
                <PlusCircle size={15} />
                <p className='text-xs'>Add</p>
            </div>
        </Card>

        <div className="flex flex-col laptop:flex-row gap-6 laptop:gap-2 justify-center">
            <Card className='relative w-full basis-2/4 text-[#0A416F] pt-6'>
                <CardContent>
                    <p className='px-4 uppercase text-sm bg-[#0A416F] text-white rounded-sm font-semibold py-1'>Referral</p>
                    <Table className=''>
                    <TableHeader className='bg-slate-50'>
                        <TableRow>
                            <TableHead className='text-left'>Hospital</TableHead>
                            <TableHead className='text-center'>Optical</TableHead>
                            <TableHead className='text-center'>Reason</TableHead>
                            <TableHead className='text-center'>Note</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium text-left">ON-Eye</TableCell>
                            <TableCell className="font-medium text-center">ON-Optics Centre</TableCell>
                            <TableCell className="font-medium text-center">-</TableCell>
                            <TableCell className="font-medium text-center">No notes</TableCell>
                        </TableRow>
                        {showReferralTable && (
                            <TableRow>
                                <TableCell className="font-medium text-left">ON-Eye</TableCell>
                                <TableCell className="font-medium text-center">ON-Optics Centre</TableCell>
                                <TableCell className="font-medium text-center">Diagnosis</TableCell>
                                <TableCell className="font-medium text-center">No notes</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    </Table>
                </CardContent>
                <div onClick={referralRow} className='absolute bottom-0 right-6 bg-[#0A416F] px-3 text-white hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 w-20 items-center justify-center gap-2 rounded-sm'>
                    <PlusCircle size={15} />
                    <p className='text-xs'>Add</p>
                </div>
            </Card>

            <div className='flex flex-col items-center gap-2 justify-center basis-2/4'>
                <p className='px-4 uppercase text-sm bg-[#0A416F] text-white text-center rounded-sm font-semibold py-1'>Follow-Up</p>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[350px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                        >
                        <CalendarIcon size={15} className="mr-3" />
                        {date ? format(date, "PPP") : <span>Pick a follow-up date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>

        <Button className='block mx-auto my-4 w-1/2 tablet:w-1/4 bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>Save</Button>
    </section>
  )
}

export default Diagnosis