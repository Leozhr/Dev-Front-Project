interface TableItemProps {
  children: React.ReactNode
}

export function TableItem({ children }: TableItemProps) {
  return (
    <div
      className="relative mb-2 h-[94px] grid-cols-2 border-b border-ui-gray-200 md:mb-0 md:grid md:h-full 
      md:min-h-0 md:w-full md:grid-cols-table md:items-center md:py-1"
    >
      {children}
    </div>
  )
}
