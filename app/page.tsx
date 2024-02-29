import { Table } from '@/components/Table'
import booking from '../cars-booking.json'

interface Car {
  name: string
  image: string
  reservation: string
  status: string
  rating: number
}

export default function Home() {
  const cars: Car[] = booking.car

  return (
    <div className="pt-[60px] md:flex md:h-screen md:w-full md:items-center md:justify-center md:pt-0">
      <Table.Root>
        {cars.map((car, index) => (
          <Table.Item key={index}>
            <Table.Car text={car.name} src={car.image} />
            <Table.Reservation startDate={new Date(car.reservation)} />
            <Table.Status status={car.status} />
            <Table.Rating rating={car.rating} />
            <Table.Action />
          </Table.Item>
        ))}
      </Table.Root>
    </div>
  )
}
