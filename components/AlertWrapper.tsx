import { getLastClass } from "@/data/aulas"

export const AlertWrapper = async () => {
  const lastEvent = await getLastClass()

  if (!lastEvent) return <></>

  return (
    <div className="w-full flex bg-[#F21C5C] justify-between px-3 py-2 items-end mb-2">
      <div className="flex flex-col gap-2">
        <span className="text-md font-bold">{lastEvent.description}</span>
        <span className="text-sm font-medium">{lastEvent.professor.name}</span>
      </div>
      <span className="text-sm font-medium">{lastEvent.date.toLocaleDateString().slice(0, 5)}</span>
    </div>
  )
}