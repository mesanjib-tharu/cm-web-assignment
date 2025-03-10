import Image from 'next/image'
import { LargeButton, MediumButton, SmallButton } from '../components/Buttons'
export default function Home() {
  return (
      <>
      <p className='text-sm'>Hello World </p>
      <LargeButton />
      <br/>
      <MediumButton />
      <br/>
      <SmallButton />

      </>
  )
}
