import { format } from 'date-fns'

interface TableReservationProps {
  startDate: Date
  endDate: Date
}

export function TableReservation({
  startDate,
  endDate,
}: TableReservationProps) {
  function formatDate(date: Date) {
    return format(date.setHours(24), 'MMM dd')
  }

  return (
    <div className="mt-2 md:mt-0 md:px-4 md:col-start-2 md:col-end-3">
      <h1 className="text-xs md:text-ui-gray-500 md:text-sm">
        {formatDate(startDate)} - {formatDate(endDate)}
      </h1>
    </div>
  )
}
