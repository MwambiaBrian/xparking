import Image from 'next/image'
import { add } from '@parkingX/sample-lib'
export default function Home() {
  return (
    <div>
      <h1>ParkingX {add(3, 4)}</h1>
    </div>
  )
}
