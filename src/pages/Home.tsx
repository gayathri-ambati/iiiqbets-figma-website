import type { JSX } from 'react'
// import { Link } from 'react-router-dom'
import HeroCarousel from '../components/Hero/HeroCarousel'
import TechEcosystem from '../components/TechnEcoSystem/TechEcoSystem'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import DigitalExpertise from '../components/DigitalExpertise/DigitalExpertise'
import ClientTestimonials from '../components/ClientTestimonals/ClientTestimonals'
import DigitalAdvantage from '../components/Hero/DigitalAdvantage'
import DigitalJourney from '../components/Hero/DigitalJourney'

export default function Home(): JSX.Element {
  return (
    <>
      <HeroCarousel />
      <TechEcosystem />
      <DigitalAdvantage />
      <DigitalJourney />
      <WhyChooseUs />
      <DigitalExpertise />
      <ClientTestimonials />

   
    </>
  )
}