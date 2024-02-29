import Image from 'next/image'

interface TableCarProps {
  text: string
  src: string
}

export function TableCar({ text, src }: TableCarProps) {
  return (
    <div className="md:col-start-1 md:col-end-2 md:flex md:items-center md:gap-2 md:px-4">
      <Image
        src={src}
        alt="car"
        width={85}
        height={85}
        className="float-left mr-5 max-w-[85px] md:max-w-[50px]"
        priority
      />
      <h1 className="font-semibold md:text-sm md:font-normal">{text}</h1>
    </div>
  )
}
