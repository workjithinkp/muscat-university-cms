import HeroSection from '@/components/home/HeroSection'
import PlacementSection from '@/components/home/PlacementSection'
import CareerSection from '@/components/home/CareerSection'
import WhySection from '@/components/home/WhySection'
import FutureSection from '@/components/home/FutureSection'
import ResearchSection from '@/components/home/ResearchSection'
import NewsSection from '@/components/home/NewsSection'
import VirtualSection from '@/components/home/VirtualSection'
import PartnerSection from '@/components/home/PartnerSection'
import Preloader from '@/lib/pre-loader'

export default function Home() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <PlacementSection />
      <CareerSection />
      <WhySection />
      <FutureSection />
      <ResearchSection />
      <NewsSection />
      <VirtualSection />
      <PartnerSection />
    </>
  )
}
