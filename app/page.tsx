import { AlertWrapper } from "@/components/AlertWrapper";
import { DatesContainer } from "@/components/DatesContainer";
import { DrawerDialog } from "@/components/DrawerDialog";
import db from "@/lib/db";
import BackgroundImage from "@/public/background.jpg";

export default async function Home() {
  const schedules = await db.schedules.findMany({ include: { teacher: true } });

  return (
    <div
      className="w-full h-[100dvh] bg-black"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-[100dvh] flex flex-col items-center p-8 pt-16 bg-[linear-gradient(340deg,_rgba(0,_0,_0,_0.40)_33.25%,_rgba(0,_0,_0,_0.00)_100%)]">
        <div className="w-full max-w-lg h-[100dvh]">
          <AlertWrapper />
          <DatesContainer schedules={schedules} />
          <DrawerDialog schedules={schedules} />
        </div>
      </div>
    </div>
  );
}
