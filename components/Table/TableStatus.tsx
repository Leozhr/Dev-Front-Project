import Image from 'next/image'

interface TableStatusProps {
  status: 'available' | 'unavailable'
}

export function TableStatus({ status }: TableStatusProps) {
  return (
    <div className="md:px-4 md:col-start-3 md:col-end-4">
      <div
        className={`md:bg-[#DEF7EC] md:inline-block md:rounded-md md:px-[10px] md:pb-1 hidden absolute md:relative
          ${status === 'available' ? 'text-[#03543F]' : 'bg-[#F7DEDE]'}`}
      >
        <span
          className={`md:text-[#03543F] md:capitalize md:text-xs md:font-medium md:text-center
            ${status === 'available' ? 'text-[#03543F]' : 'text-[#540303]'}`}
        >
          {status}
        </span>
      </div>

      <div className="md:hidden absolute top-[2px] left-[2px] bg-[#057A55] rounded-full p-1">
        <Image src="/check.svg" alt="status" width={16} height={16} />
      </div>
    </div>
  )
}
