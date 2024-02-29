import Image from 'next/image'

export function TableAction() {
  return (
    <div className="absolute end-1 top-0 md:relative md:flex md:items-center md:justify-center md:col-start-5 md:col-end-6">
      <button>
        <Image src="/dots-vertical.svg" alt="action" width={24} height={24} />
      </button>
    </div>
  )
}
