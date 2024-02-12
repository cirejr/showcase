import { AboutMeContent } from '@/components/AboutMeContent'
import { AboutMeHeader } from '@/components/AboutMeHeader'
import HeroSection from '@/components/HeroSection'
import { LampHero } from '@/components/LampHero'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import { TextRevealCard } from '@/components/ui/TextRevealCard'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { IoArrowDown } from 'react-icons/io5'

export default function Home() {
  const words = 'Meet your next adventure partner'
  return (
    <main className="">
      <HeroSection>
        <div className="flex justify-center items-center h-full mx-auto max-w-[1024px]">
          <div className="flex flex-col text-center h-full justify-center items-center">
            <TextGenerateEffect words={words} />
            <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-[764px]">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <Button
              className="mt-10 align-bottom w-fit mx-auto"
              radius="full"
              size="lg"
              endContent={<IoArrowDown />}
            >
              Discover More
            </Button>
          </div>
        </div>
      </HeroSection>
      <section className="w-full">
        <AboutMeHeader />
        <AboutMeContent />
      </section>
    </main>
  )
}
