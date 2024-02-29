import Image from 'next/image'

export function TableAction() {
  return (
    <div className="absolute end-1 top-0 md:relative md:col-start-5 md:col-end-6 md:flex md:items-center md:justify-center">
      <button>
        <Image
          src="/dots-vertical.svg"
          alt="action"
          width={0}
          height={0}
          sizes="24px"
          className="h-auto w-[24px]"
        />
      </button>
    </div>
  )
}
