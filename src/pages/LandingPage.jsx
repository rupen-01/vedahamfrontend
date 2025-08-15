// src/components/HeroSection.jsx

import Hero from "./Hero.jsx";
import ClientStats from "./ClientStates.jsx";
import CarouselSection from "./CarouselSection.jsx";
import GrowthSection from "./GrowthSection.jsx";
import Industries from "./Industries.jsx";
import AwardsAndLocations from "./AwardsAndLocations.jsx";
import ContactForm from "./ContactForm.jsx";
import ClientSlider from "../componenet/ClientSider.jsx";
export default function LandingPage() {
  return (
  <>
        <Hero />
        <ClientSlider />
        <ClientStats />
        <CarouselSection />
        <GrowthSection/>
        <Industries/>
        <AwardsAndLocations/>
        <ContactForm/>
  </>
  );
}
