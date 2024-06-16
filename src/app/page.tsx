import Image from "next/image";
import Header from '@/components/Header/header'
import Dashboard from '@/components/Dashboard/Dashboard'
import CurrentTask from '@/components/CurrentTask/CurrentTask'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center	align-center">
      <Header/>
      <CurrentTask/>      
      <Dashboard/>
     test
    </main>
  );
}
