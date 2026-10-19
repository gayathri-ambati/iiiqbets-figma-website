import type { JSX } from 'react'
// import { Link } from 'react-router-dom'
import HeroCarousel from '../components/Hero/HeroCarousel'
import TechEcosystem from '../components/TechnEcoSystem/TechEcoSystem'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import DigitalExpertise from '../components/DigitalExpertise/DigitalExpertise'
import ClientTestimonials from '../components/ClientTestimonals/ClientTestimonals'

export default function Home(): JSX.Element {
  return (
    <>
      <HeroCarousel />
      <TechEcosystem />
      <WhyChooseUs />
      <DigitalExpertise />
      <ClientTestimonials />

      {/* <section className="iiq-home-intro mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold">Welcome Home</h2>
        <p className="mt-2">This is the home page of MyApp.</p>
        <Link to="/about" className="mt-3 inline-block text-sky-600 hover:underline">
          Learn more about us →
        </Link>
      </section> */}
    </>
  )
}