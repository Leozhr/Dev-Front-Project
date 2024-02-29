import { format } from 'date-fns'

interface TableReservationProps {
  startDate: Date
}

export function TableReservation({ startDate }: TableReservationProps) {
  function formatDate(date: Date) {
    date.setDate(date.getDate() + 1)
    return format(date, "MM'/'dd")
  }

  const newStartDate = formatDate(startDate)

  return (
    <div className="md:col-start-2 md:col-end-3 md:px-4">
      <span className="hidden text-xs text-ui-gray-500 md:block md:text-sm">
        {newStartDate}
      </span>
      <span className="text-xs text-ui-gray-500 md:absolute md:hidden">
        Next reservation: {newStartDate}
      </span>
    </div>
  )
}
