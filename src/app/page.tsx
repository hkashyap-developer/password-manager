import Image from "next/image";
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/Footer'
import Dashboard from '@/components/Dashboard/Dashboard'
import CurrentTask from '@/components/CurrentTask/CurrentTask'


import { Outfit } from 'next/font/google'
 
const outfit = Outfit({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
})



export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center align-center">
      <h1 className={outfit.className}>testing</h1>
      <Header/>
      <CurrentTask/>      
      <Dashboard/>
      <Footer/>
    </main>
  );
}
