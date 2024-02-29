import Image from 'next/image'

export function TableAction() {
  return (
    <div className="absolute end-1 top-0 md:relative md:flex md:items-center md:justify-center md:col-start-5 md:col-end-6">
      <button>
        <Image
          src="/dots-vertical.svg"
          alt="action"
          width={0}
          height={0}
          sizes="24px"
          className="w-[24px] h-auto"
        />
      </button>
    </div>
  )
}
