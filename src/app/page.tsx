import Image from 'next/image'
import Button from '../components/Buttons'
import Header from '../components/Header'
import HeroBanner from '../components/HeroBanner'
import Infinitescroll from '../components/Infinitescroll'
export default function Home() {
  return (
      <>
      <Header />
      <HeroBanner />
      <Infinitescroll />
      </>
  )
}
