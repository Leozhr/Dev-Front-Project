import Image from 'next/image'

interface TableRatingProps {
  rating: number
}

export function TableRating({ rating }: TableRatingProps) {
  const maxRating = 5

  return (
    <div className="mt-[12px] md:col-start-4 md:col-end-5 md:mt-0 md:flex md:gap-1 md:px-4">
      {Array.from({ length: maxRating }).map((_item, index) => (
        <Image
          src="/star.svg"
          key={index}
          alt="rating"
          width={0}
          height={0}
          sizes="15px"
          className={`${index < rating ? 'opacity-100' : 'opacity-50'} inline-block h-auto w-[15px]`}
        />
      ))}
    </div>
  )
}
