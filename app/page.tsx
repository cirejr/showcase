import { AboutMeContent } from '@/components/AboutMeContent'
import { AboutMeHeader } from '@/components/AboutMeHeader'
import { LampHero } from '@/components/LampHero'
import { TextRevealCard } from '@/components/ui/TextRevealCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <LampHero />
      <section className="w-full">
        <AboutMeHeader />
        <AboutMeContent />
      </section>
    </main>
  )
}
