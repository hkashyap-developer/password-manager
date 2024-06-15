import Image from "next/image";
import Header from '@/components/Header/header'
import Dashboard from '@/components/Dashboard/Dashboard'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center	align-center">
      <Header/>
      I am a good test
      <Dashboard/>
     test
    </main>
  );
}
