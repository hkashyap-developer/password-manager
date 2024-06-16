import Image from "next/image";
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/Footer'
import Dashboard from '@/components/Dashboard/Dashboard'
import CurrentTask from '@/components/CurrentTask/CurrentTask'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center align-center">
      <Header/>
      <CurrentTask/>      
      <Dashboard/>
      <Footer/>
    </main>
  );
}
