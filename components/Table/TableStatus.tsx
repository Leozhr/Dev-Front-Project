import Image from 'next/image'

interface TableStatusProps {
  status: boolean
}

export function TableStatus({ status }: TableStatusProps) {
  return (
    <div className="md:col-start-3 md:col-end-4 md:px-4">
      <div
        className={`absolute hidden md:relative md:inline-block md:rounded-md md:bg-ui-green-100 md:px-[10px]
          ${status ? 'text-[#03543F]' : 'text-ui-red-600 md:bg-ui-red-100'}`}
      >
        <span
          className={
            'flex py-[2px] md:text-xs md:font-medium md:capitalize first-letter:md:text-center'
          }
        >
          {status ? 'Available' : 'Not Available'}
        </span>
      </div>

      <div
        className={`absolute left-[2px] top-[2px] rounded-full p-1 
        ${status ? 'bg-ui-green-600' : 'bg-ui-red-600'} md:hidden`}
      >
        <Image
          src="/check.svg"
          alt="status"
          width={0}
          height={0}
          sizes="16px"
          className={`h-auto w-[16px] ${status ? 'block' : 'hidden'}`}
        />
        <Image
          src="/no-check.svg"
          alt="status"
          width={0}
          height={0}
          sizes="16px"
          className={`h-auto w-[16px] ${!status ? 'block' : 'hidden'}`}
        />
      </div>
    </div>
  )
}
