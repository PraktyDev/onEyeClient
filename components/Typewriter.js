'use client'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Typewriter = () => {

    const [text] = useTypewriter({
        words: ['5,000 Monthly Patients', '100 Qualified Doctors', '200 Trained TeleAssistants',],
        loop: 0,
      })
      
  return (
    <div className='flex items-center justify-center'>
      <span className='font-bold text-3xl text-[#0A416F] text-center'>{text}</span>
      <Cursor cursorColor='red' />
    </div>
  )
}

export default Typewriter