import { Bell, Mail } from "lucide-react"
import { Separator } from "./ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"

const DocNav = () => {
    const fullName = "Praise Akintayo"
    const nameArray = fullName.split(' ')
    const firstName = nameArray[0]
    const initial = nameArray[0]?.[0] ?? ''
    const last = nameArray[1]?.[0] ?? ''

  return (
    <div className="w-full flex justify-between items-center bg-white py-2 px-2 tablet:px-6 ">
        <div className="flex flex-col">
            <h3 className="font-semibold text-md">Welcome Dr <span>{firstName ? firstName : 'null'}</span></h3>
            <p className="text-sm text-slate-700 font-thin">You have seen 0 patient(s) today</p>
        </div>

        <div className="flex items-center gap-3">
            <Mail size={20} />
            <Bell size={20} />
            <Separator orientation='vertical' className='h-7 border-1 rounded' />
            <DropdownMenu className='relative'>
                <DropdownMenuTrigger>
                    <Avatar className='cursor-pointer'>
                        <AvatarImage src={''} />
                        <AvatarFallback className='font-semibold text-sm'>{initial}{last}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[200px] absolute top-3 -right-4'>
                    <DropdownMenuLabel className='flex gap-2 items-center'>
                        <div className='flex flex-col'>
                            <p className='text-md font-semibold'>Praise Akintayo</p>
                            <p className='text-sm font-thin'>Doctor</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Button className='w-full mt-2'>Logout</Button>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
  )
}

export default DocNav