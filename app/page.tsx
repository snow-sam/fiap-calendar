import BackgroundImage from '@/public/background.jpg'
import { AlertWrapper } from '@/components/AlertWrapper'
import { ContainerDates } from '@/components/ContainerDates'
import { DrawerDialog } from '@/components/DrawerDialog'
import { getHorarios } from "@/data/horarios"

export default async function Home() {
  const horarios = await getHorarios()
  return (
    <div className='w-full h-[100dvh] bg-black' style={{
      backgroundImage: `url(${BackgroundImage.src})`,
      backgroundSize: 'cover'
    }}>
      <div className="w-full h-[100dvh] flex flex-col items-center p-8 pt-16 bg-[linear-gradient(340deg,_rgba(0,_0,_0,_0.40)_33.25%,_rgba(0,_0,_0,_0.00)_100%)]">
        <div className="w-full max-w-lg h-[100dvh]">
          <AlertWrapper />
          <ContainerDates horarios={horarios}/>
          <DrawerDialog horarios={horarios}/>
        </div>
      </div>
    </div>
  )
}