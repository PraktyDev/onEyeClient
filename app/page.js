import OnLogo from '@/components/OnLogo'
import Typewriter from '@/components/Typewriter'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <section className='w-full max-w-6xl mx-auto mt-10 mb-5 tablet:my-10'>
      <div className='flex flex-col tablet:flex-row items-center justify-center gap-10 mb-6 laptop:mb-1'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <div className='flex flex-col cursor-default gap-5'>
            <div className='flex flex-col gap-2 tablet:gap-4 items-center'>
              <div className='flex items-center justify-center w-14 tablet:w-16 h-14 tablet:h-16 bg-[#8BC2F2] rounded-md'>
                <OnLogo />
              </div>
              <div className='flex flex-col text-right text-[#0A416F]'>
                <h1 className='text-3xl tablet:text-4xl laptop:text-5xl font-bold'>ON-EYE</h1>
                <p className='text-xs tablet:text-base laptop:text-lg -mt-2'>TELEHEALTH</p>
              </div>
            </div>
            <div className='text-center leading-7 w-auto tablet:w-[510px] text-[#0A416F]'>
              Making quality eyecare affordable and accessible for all. Eliminating and reducing queues in our hospitals using tech
            </div>
          </div>

          <div className='flex gap-4'>
            <Link href={'/doctor'}>
              <Button className='bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>Doctor</Button>
            </Link>
            <Link href={'/teleassistant'}>
              <Button className='bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>TeleAssistant</Button>
            </Link>
            <Link href={'/admin'}>
              <Button className='bg-[#0A416F] hover:bg-[#8BC2F2] hover:text-[#0A416F]'>Admin</Button>
            </Link>
          </div>
        </div>

        <div className='hidden laptop:block'>
          <Image alt='' src={'/images/eye.jpg'} width={1000} height={1000} className='rounded-t-3xl rounded-b-xl h-[450px] object-cover'/>
        </div>
      </div>

      <div className='flex flex-col tablet:flex-row gap-1 laptop:w-full my-1 laptop:my-1 mx-2 laptop:mx-0'>
        <div className='laptop:basis-1/3 tablet:basis-1/2 transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95'>
          <Image alt='' src={'/images/glasses.jpg'} width={1000} height={1000} className='rounded-2xl h-44 object-cover'/>
        </div>
        <div className='z-10 laptop:basis-1/3 tablet:basis-1/2 bg-[#0A416F] h-44 rounded-2xl flex gap-2 items-center justify-center transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95'>
          <div className='flex items-center justify-center w-16 h-16 bg-white rounded-full'>
            <OnLogo />
          </div>
          <div className='flex flex-col items-end justify-center h-44 text-right text-[#ECF3FA] cursor-default'>
            <h1 className='text-3xl font-bold'>ON-EYE</h1><span className='text-xs text-right'>TELEHEALTH</span>
          </div>
        </div>
        <div className='laptop:basis-1/3 tablet:hidden laptop:flex transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95'>
          <Image alt='' src={'/images/slit.jpg'} width={1000} height={1000} className='rounded-2xl h-44 object-cover'/>
        </div>
      </div>

      <div className='flex flex-col tablet:flex-row gap-1 laptop:w-full mx-2 laptop:mx-0'>
        <div className='basis-2/3 bg-[#8BC2F2] h-48 rounded-2xl flex flex-col justify-center items-center cursor-default transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95'>
          <div className='z-20 h-48 flex items-center justify-center'><Typewriter /></div>
        </div>
        <div className='hidden tablet:block basis-3/4 transition-transform duration-700 ease-in-out transform scale-100 hover:scale-95'>
          <Image alt='' src={'/images/eyeball.jpg'} width={1000} height={1000} className='rounded-2xl h-48 object-cover'/>
        </div>
      </div>
    </section>
  )
}

export default page