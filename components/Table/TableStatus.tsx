import Image from 'next/image'

interface TableStatusProps {
  status: 'available' | 'unavailable'
}

export function TableStatus({ status }: TableStatusProps) {
  return (
    <div className="md:px-4 md:col-start-3 md:col-end-4">
      <div
        className={`md:bg-ui-green-100 md:inline-block md:rounded-md md:px-[10px] md:pb-1 hidden absolute md:relative
          ${status === 'available' ? 'text-[#03543F]' : 'text-ui-red-600 bg-[ui-red-100]'}`}
      >
        <span
          className={'md:capitalize md:text-xs md:font-medium md:text-center'}
        >
          {status}
        </span>
      </div>

      <div className="md:hidden absolute top-[2px] left-[2px] bg-ui-green-600 rounded-full p-1">
        <Image src="/check.svg" alt="status" width={16} height={16} />
      </div>
    </div>
  )
}
