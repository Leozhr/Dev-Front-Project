import Image from 'next/image'

type TableStatus = 'available' | 'unavailable'

interface TableStatusProps {
  status: TableStatus
}

export function TableStatus({ status }: TableStatusProps) {
  return (
    <div className="md:col-start-3 md:col-end-4 md:px-4">
      <div
        className={`absolute hidden md:relative md:inline-block md:rounded-md md:bg-ui-green-100 md:px-[10px] md:pb-1
          ${status === 'available' ? 'text-[#03543F]' : 'bg-[ui-red-100] text-ui-red-600'}`}
      >
        <span
          className={'md:text-center md:text-xs md:font-medium md:capitalize'}
        >
          {status}
        </span>
      </div>

      <div className="absolute left-[2px] top-[2px] rounded-full bg-ui-green-600 p-1 md:hidden">
        <Image src="/check.svg" alt="status" width={16} height={16} />
      </div>
    </div>
  )
}
