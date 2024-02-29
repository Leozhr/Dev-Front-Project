import { Table } from '@/components/Table'

export default function Home() {
  const listNumber = [1, 2, 3, 4, 5]

  return (
    <div className="pt-[60px] md:pt-0 md:h-screen md:w-full md:flex md:items-center md:justify-center">
      <Table.Root>
        {listNumber.map((number) => (
          <Table.Item key={number}>
            <Table.Car text="Mini Cooper 2020" src="/car-mini-cooper.png" />
            <Table.Reservation
              startDate={new Date('2024-07-06')}
              endDate={new Date('2024-12-22')}
            />
            <Table.Status status="available" />
            <Table.Rating rating={5} />
            <Table.Action />
          </Table.Item>
        ))}
      </Table.Root>
    </div>
  )
}
