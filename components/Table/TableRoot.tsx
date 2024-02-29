interface TableRootProps {
  children: React.ReactNode
}

export function TableRoot({ children }: TableRootProps) {
  return (
    <div className="min-w-[300px] px-4 md:px-0 md:container md:mx-auto md:rounded-md md:shadow-md">
      <div className="hidden absolute md:relative md:block md:w-full md:bg-ui-gray-50 md:border-b-2 md:border-ui-gray-200">
        <div
          className="md:w-full md:h-full md:py-4 md:ml-4 md:grid md:grid-cols-table md:items-center md:uppercase 
          md:font-semibold md:text-xs md:text-ui-gray-500"
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
