import Image from 'next/image'
import { Inter } from 'next/font/google'
import InputUserComponent from './component-input/InputUserComponent'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
  <InputUserComponent/>
     </>
  )
}
