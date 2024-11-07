"use client"
import { format } from "date-fns"
import { CalendarIcon, PlusCircle } from "lucide-react"
import { useState, useEffect } from "react"
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
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"
import { Oval  } from 'react-loader-spinner'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { toast } from "sonner"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const diagnosisSchema = z.object({
    diagnosisName: z.string().min(1, "Diagnosis is required"),
    eye: z.enum(["OD", "OS", "OU"]),
    remark: z.string().optional(),
})

const investigationSchema = z.object({
    investigationName: z.string().optional(),
    eye: z.enum(["OD", "OS", "OU"]).optional(),
    remark: z.string().optional(),
})

const medicationSchema = z.object({
    medicationName: z.string().min(1, "Medication is required"),
    dosage: z.enum(["HS", "BDS", "TDS", "QDS", "SOS", "custom"]),
    days: z.string().optional(),
    route: z.enum(["topical", "oral"]),
    eye: z.enum(["OD", "OS", "OU"]),
    instruction: z.string().optional(),
})

const referralSchema = z.object({
    hospitalName: z.string().optional(),
    opticalName: z.string().optional(),
    reason: z.string().optional(),
    note: z.string().optional(),
})

const formSchema = z.object({
    diagnosis: z.array(diagnosisSchema).min(1, "At least one diagnosis is required"),
    investigation: z.array(investigationSchema).optional(),
    medication: z.array(medicationSchema).min(1, "At least one medication is required"),
    referral: z.array(referralSchema).optional(),
})

const Diagnosis = () => {
    const [date, setDate] = useState()

    const addDiagnosisRow = () => {
        diagnosisArray.append({ diagnosisName: '', eye: undefined, remark: '' })
    }

    const addInvestigationRow = () => {
        investigationArray.append({ investigationName: '', eye: undefined, remark: '' })
    }

    const addMedicationRow = () => {
        medicationArray.append({ medicationName: '', dosage: undefined, days: '', route: undefined, eye: undefined, instruction: '' })
    }

    const addReferralRow = () => {
        referralArray.append({ hospitalName: '', opticalName: '', reason: '', note: ''})
    }


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            diagnosis: [{ diagnosisName: '', eye: undefined, remark: '' }],
            investigation: [{ investigationName: '', eye: undefined, remark: '' }],
            medication: [{ medicationName: '', dosage: undefined, days:'', route:'', eye: undefined, instruction: '' }],
            referral: [{ hospitalName: '', opticalName: '', reason: '', note: '' }],
        },
    })

    const diagnosisArray = useFieldArray({
        name: "diagnosis",
        control: form.control,
    })

    const investigationArray = useFieldArray({
        name: "investigation",
        control: form.control,
    })

    const medicationArray = useFieldArray({
        name: "medication",
        control: form.control,
    })

    const referralArray = useFieldArray({
        name: "referral",
        control: form.control,
    })
    
      const { reset } = form
      const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState
     
      const onSubmit = async (values) => {

        const data = {
            values: values,
            date: date
        }

        try {
          // await axios.post('endpoint', values)
          console.log(JSON.stringify(data))
          toast("Diagnosis added successfully")
        } catch (error) {
          toast("Diagnosis added failed")
        }
      }
    
      useEffect(()=>{
        if(isSubmitSuccessful){
          reset()
        }
      },[isSubmitSuccessful, reset])
  


  return (
    <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
                    {diagnosisArray.fields.map((field, index) => (
                        <TableRow key={field.id}>
                            <TableCell className="font-medium text-left px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`diagnosis.${index}.diagnosisName`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="diagnosis name" {...field} className='w-full placeholder:text-xs focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`diagnosis.${index}.eye`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger className="placeholder:text-xs w-full focus:ring-1 font-normal focus:ring-[#8BC2F2] rounded-sm" >
                                                <SelectValue className="" placeholder="eye" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="OD">OD</SelectItem>
                                                <SelectItem value="OS">OS</SelectItem>
                                                <SelectItem value="OU">OU</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`diagnosis.${index}.remark`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Textarea placeholder="remark" {...field} className='w-full placeholder:text-xs text-sm h-10 focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody> 
                    </Table>
                </CardContent>
                <div onClick={addDiagnosisRow} className='cursor-default absolute bottom-0 right-6 bg-[#0A416F] px-3 text-white hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 w-20 items-center justify-center gap-2 rounded-sm'>
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
                    {investigationArray.fields.map((field, index) => (
                        <TableRow key={field.id}>
                            <TableCell className="font-medium text-left px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`investigation.${index}.investigationName`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="investigation name" {...field} className='w-full placeholder:text-xs focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`investigation.${index}.eye`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger className="placeholder:text-xs w-full focus:ring-1 font-normal focus:ring-[#8BC2F2] rounded-sm" >
                                                <SelectValue className="" placeholder="eye" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="OD">OD</SelectItem>
                                                <SelectItem value="OS">OS</SelectItem>
                                                <SelectItem value="OU">OU</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`investigation.${index}.remark`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Textarea placeholder="remark" {...field} className='w-full placeholder:text-xs text-sm h-10 focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                </CardContent>
                <div onClick={addInvestigationRow} className='cursor-default absolute bottom-0 right-6 bg-[#0A416F] px-3 text-white hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 w-20 items-center justify-center gap-2 rounded-sm'>
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
                        <TableHead className='text-center w-[100px]'>Dosage</TableHead>
                        <TableHead className='text-center w-[70px]'>Days</TableHead>
                        <TableHead className='text-center w-[100px]'>Route</TableHead>
                        <TableHead className='text-center w-[100px]'>Eye</TableHead>
                        <TableHead className='text-center'>Instructions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {medicationArray.fields.map((field, index) => (
                        <TableRow key={field.id}>
                            <TableCell className="font-medium text-left px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`medication.${index}.medicationName`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="medication name" {...field} className='w-full placeholder:text-xs focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`medication.${index}.dosage`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger className="w-[100px] placeholder:text-xs focus:ring-1 font-normal focus:ring-[#8BC2F2] rounded-sm" >
                                                <SelectValue className="" placeholder="dosage" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="HS">HS</SelectItem>
                                                <SelectItem value="BDS">BDS</SelectItem>
                                                <SelectItem value="TDS">TDS</SelectItem>
                                                <SelectItem value="QDS">QDS</SelectItem>
                                                <SelectItem value="SOS">SOS</SelectItem>
                                                <SelectItem value="Custom">Custom</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`medication.${index}.days`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="days" {...field} className='w-[70px] placeholder:text-xs text-sm h-10 focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`medication.${index}.route`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger className="placeholder:text-xs w-[100px] focus:ring-1 font-normal focus:ring-[#8BC2F2] rounded-sm" >
                                                <SelectValue className="" placeholder="route" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="topical">Topical</SelectItem>
                                                <SelectItem value="oral">Oral</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`medication.${index}.eye`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                            <SelectTrigger className="placeholder:text-xs w-[100px] focus:ring-1 font-normal focus:ring-[#8BC2F2] rounded-sm" >
                                                <SelectValue className="" placeholder="eye" />
                                            </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="OD">OD</SelectItem>
                                                <SelectItem value="OS">OS</SelectItem>
                                                <SelectItem value="OU">OU</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`medication.${index}.instruction`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Textarea placeholder="instruction" {...field} className='w-full placeholder:text-xs text-sm h-10 focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </CardContent>
            <div onClick={addMedicationRow} className='absolute bottom-0 right-6 bg-[#0A416F] px-3 text-white hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 w-20 items-center justify-center gap-2 rounded-sm'>
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
                    {referralArray.fields.map((field, index) => (
                        <TableRow key={field.id}>
                            <TableCell className="font-medium text-left px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`referral.${index}.hospitalName`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="hospital name" {...field} className='w-full placeholder:text-xs focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-left px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`referral.${index}.opticalName`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="optical name" {...field} className='w-full placeholder:text-xs focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`referral.${index}.reason`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Textarea placeholder="reason" {...field} className='w-full placeholder:text-xs text-sm h-10 focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                            <TableCell className="font-medium text-center px-0.5">
                                <FormField
                                    control={form.control}
                                    name={`referral.${index}.note`}
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        <Textarea placeholder="note" {...field} className='w-full placeholder:text-xs text-sm h-10 focus-visible:ring-1 focus-visible:ring-[#8BC2F2] rounded-sm' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                </CardContent>
                <div onClick={addReferralRow} className='absolute bottom-0 right-6 bg-[#0A416F] px-3 text-white hover:bg-[#8BC2F2] hover:text-[#0A416F] flex h-7 w-20 items-center justify-center gap-2 rounded-sm'>
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

        <Button onSubmit={onSubmit} className='block mx-auto my-4 w-1/2 tablet:w-1/4 bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>Save</Button>
    </form>
    </Form>
  )
}

export default Diagnosis