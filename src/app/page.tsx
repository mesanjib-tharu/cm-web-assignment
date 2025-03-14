import Image from 'next/image';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import Infinitescroll from '../components/Infinitescroll';
import Courses from '../components/Courses';
import CTA1 from '../components/CTA1';
import  Achivement  from '../components/Achivements';
import { benefits } from "../data/sliderData";
import Works from '../components/Works';
import Learning from '../components/Learning';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
export default function Home() {
  return (
      <>
      <Header />
      <HeroBanner />
      <Infinitescroll />
      <Courses />
      <Achivement items={benefits}/>
      <CTA1 />
      <Works />
      <Learning />
      <Testimonials />
      <FAQ />
      </>
  )
}
