interface TableRootProps {
  children: React.ReactNode
}

export function TableRoot({ children }: TableRootProps) {
  return (
    <div className="min-w-[300px] px-4 md:container md:mx-auto md:rounded-md md:px-0 md:shadow-md">
      <div className="absolute hidden md:relative md:block md:w-full md:border-b-2 md:border-ui-gray-200 md:bg-ui-gray-50">
        <div
          className="md:ml-4 md:grid md:h-full md:w-full md:grid-cols-table md:items-center md:py-4 md:text-xs 
          md:font-semibold md:uppercase md:text-ui-gray-500"
        >
          <span>Car</span>
          <span>Next Reservation</span>
          <span>Status</span>
          <span>Rating</span>
          <span>Actions</span>
        </div>
      </div>
      {children}
    </div>
  )
}
