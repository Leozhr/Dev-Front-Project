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

  const newStartDate = formatDate(startDate)
  const newEndDate = formatDate(endDate)

  return (
    <div className="md:px-4 md:col-start-2 md:col-end-3">
      <span className="hidden md:block text-xs text-ui-gray-500 md:text-sm">
        {newStartDate} - {newEndDate}
      </span>
      <span className="text-xs text-ui-gray-500 md:hidden md:absolute">
        Next reservation: {newStartDate}
      </span>
    </div>
  )
}
