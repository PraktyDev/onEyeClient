'use client'
import { Bell, CheckCheck, ExternalLink, LayoutDashboard, LoaderPinwheel, Mail } from "lucide-react"
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
import OnLogo from "./OnLogo"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

const DocNav = () => {
    const fullName = "Praise Akintayo"
    const nameArray = fullName.split(' ')
    const firstName = nameArray[0]
    const initial = nameArray[0]?.[0] ?? ''
    const last = nameArray[1]?.[0] ?? ''
    const pathname = usePathname();
    const router = useRouter()

    const onLogout = () => {
        router.push('/doctor')
    }

  return (
    <section className="flex gap-0 shadow-md">
    <Sheet>
        <SheetTrigger>
        <div className="bg-[#8BC2F2] flex laptop:hidden items-center justify-center rounded-tl-sm rounded-bl-sm p-1 shadow-md w-12 h-auto transition-transform duration-700 ease-in-out transform scale-100 hover:scale-90">
            <OnLogo />
        </div>
        </SheetTrigger>
        <SheetContent side='left' className='w-[200px] flex flex-col grow gap-5'>
            <div className="flex items-center justify-center gap-3 mt-10 w-full">
                <div className="bg-[#8BC2F2] flex w-8 h-8 laptop:hidden items-center justify-center rounded-md p-1 shadow-md transition-transform duration-700 ease-in-out transform scale-100 hover:scale-90">
                    <OnLogo />
                </div>
                <div className='flex flex-col items-end justify-center text-right text-[#0A416F] cursor-default'>
                    <h1 className='text-lg font-bold'>ON-EYE</h1><span className='text-xs -mt-2 text-right'>TELEHEALTH</span>
                </div>
            </div>

            <Separator className='' />

            <div className="flex flex-col gap-10 w-full mt-5">
                <div className="flex flex-col gap-2">
                <p className={`text-xs ml-2 text-[#0A416F] transition-opacity duration-300`}>Menu</p>
                <Link
                    className={`link ${
                    pathname === "/doctor/dashboard"
                        ? "bg-[#8BC2F230] text-[#0A416F] font-semibold"
                        : "text-[#0A416F] font-normal hover:bg-[#8BC2F230]"
                    } p-2 rounded-md flex items-center gap-2 h-10 transition-all duration-300 ease-in-out`}
                    href="/doctor/dashboard"
                >
                    <p className={`link ${
                    pathname === "/doctor/dashboard" ? "bg-[#0A416F] text-[#8BC2F2]" : "text-[#0A416F] bg-[#8BC2F2]"} flex items-center justify-center rounded-sm w-6 h-6 text-sm flex-shrink-0`}>
                    <LayoutDashboard size={15} />
                    </p>
                    <p className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out">
                    Dashboard
                    </p>
                </Link>
                </div>

                <div className="flex flex-col gap-2">
                <p className={`text-xs ml-2 text-[#0A416F] transition-opacity duration-300`}>Patients</p>
                <Link
                    className={`link ${
                    pathname === "/doctor/dashboard/waiting-patients"
                        ? "bg-[#8BC2F230] text-[#0A416F] font-semibold"
                        : "text-[#0A416F] font-normal hover:bg-[#8BC2F230]"
                    } p-2 rounded-md flex items-center gap-2 h-10 transition-all duration-300 ease-in-out`}
                    href="/doctor/dashboard/waiting-patients"
                >
                    <p className={`link ${
                    pathname === "/doctor/dashboard/waiting-patients" ? "bg-[#0A416F] text-[#8BC2F2]" : "text-[#0A416F] bg-[#8BC2F2]"} flex items-center justify-center rounded-sm w-6 h-6 text-sm flex-shrink-0`}>
                    <LoaderPinwheel size={15} />
                    </p>
                    <p className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out">
                    Waiting
                    </p>
                </Link>
                <Link
                    className={`link ${
                    pathname === "/doctor/dashboard/attended-patients"
                        ? "bg-[#8BC2F230] text-[#0A416F] font-semibold"
                        : "text-[#0A416F] font-normal hover:bg-[#8BC2F230]"
                    } p-2 rounded-md flex items-center gap-2 h-10 transition-all duration-300 ease-in-out`}
                    href="/doctor/dashboard/attended-patients"
                >
                    <p className={`link ${
                    pathname === "/doctor/dashboard/attended-patients" ? "bg-[#0A416F] text-[#8BC2F2]" : "text-[#0A416F] bg-[#8BC2F2]"} flex items-center justify-center rounded-sm w-6 h-6 text-sm flex-shrink-0`}>
                    <CheckCheck size={15} />
                    </p>
                    <p className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out">
                    Attended
                    </p>
                </Link>
                <Link
                    className={`link ${
                    pathname === "/doctor/dashboard/referred-patients"
                        ? "bg-[#8BC2F230] text-[#0A416F] font-semibold"
                        : "text-[#0A416F] font-normal hover:bg-[#8BC2F230]"
                    } p-2 rounded-md flex items-center gap-2 h-10 transition-all duration-300 ease-in-out`}
                    href="/doctor/dashboard/referred-patients"
                >
                    <p className={`link ${
                    pathname === "/doctor/dashboard/referred-patients" ? "bg-[#0A416F] text-[#8BC2F2]" : "text-[#0A416F] bg-[#8BC2F2]"} flex items-center justify-center rounded-sm w-6 h-6 text-sm flex-shrink-0`}>
                    <ExternalLink size={15} />
                    </p>
                    <p className="text-sm whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out">
                    Referred
                    </p>
                </Link>
                </div>
            </div>
        </SheetContent>
    </Sheet>

    <div className="w-full rounded-tr-sm rounded-br-sm laptop:rounded-md flex justify-between items-center bg-white py-2 px-2 laptop:px-4">
        <div className="flex flex-col text-[#0A416F]">
            <h3 className="font-semibold text-sm tablet:text-md">Welcome Dr <span>{firstName ? firstName : 'null'}</span></h3>
            <p className="text-xs laptop:text-sm text-slate-700 font-light">You have seen 0 patient(s) today</p>
        </div>

        <div className="flex items-center gap-3">
            <Popover className='relative'>
                <PopoverTrigger><Mail color="#0A416F" size={20} /></PopoverTrigger>
                <PopoverContent className='absolute top-3.5 laptop:top-4 -right-3 text-sm text-[#0A416F]'>No messages</PopoverContent>
            </Popover>

            <Popover className='relative'>
                <PopoverTrigger><Bell color="#0A416F" size={20} /></PopoverTrigger>
                <PopoverContent className='absolute top-3.5 laptop:top-4 -right-3 text-sm text-[#0A416F]'>No notifications</PopoverContent>
            </Popover>
            
            <Separator orientation='vertical' className='h-7 border-1 rounded' />

            <DropdownMenu className='relative'>
                <DropdownMenuTrigger>
                    <Avatar className='cursor-pointer'>
                        <AvatarImage src={''} />
                        <AvatarFallback className='font-semibold text-sm text-[#0A416F]'>{initial}{last}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[200px] flex flex-col absolute top-2 laptop:top-2.5 -right-6 laptop:-right-8'>
                    <DropdownMenuLabel className='flex gap-2 items-center'>
                        <div className='flex flex-col text-[#0A416F]'>
                            <p className='text-md font-semibold'>Praise Akintayo</p>
                            <p className='text-sm font-light'>Doctor</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="w-full flex justify-center my-1">
                        <Button onClick={onLogout} className='w-[60px] h-[25px] bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F] rounded-sm'>Logout</Button>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
    </section>
  )
}

export default DocNav