interface TableItemProps {
  children: React.ReactNode
}

export function TableItem({ children }: TableItemProps) {
  return (
    <div
      className="h-[94px] mb-2 relative md:mb-0 md:min-h-0 md:w-full md:h-full md:grid grid-cols-2 
      md:grid-cols-table md:items-center md:py-1 border-b border-ui-gray-200"
    >
      {children}
    </div>
  )
}
