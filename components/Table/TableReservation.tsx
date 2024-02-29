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
    <div className="md:px-4 md:col-start-2 md:col-end-3">
      <span className="hidden md:block text-xs text-ui-gray-500 md:text-sm">
        {formatDate(startDate)} - {formatDate(endDate)}
      </span>
      <span className="text-xs text-ui-gray-500 md:hidden md:absolute">
        Next reservation: {formatDate(startDate)}
      </span>
    </div>
  )
}
