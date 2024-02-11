'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { LampContainer } from '@/components/ui/lamp'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import UserCard from './UserCard'
import { TextRevealCard } from './ui/TextRevealCard'
import { Button, Image } from '@nextui-org/react'
import { AboutMeHeader } from './AboutMeHeader'
import { SparklesBg } from './SparkesBg'
import { GiBigDiamondRing, GiDiamondRing } from 'react-icons/gi'
import { IoVideocam } from 'react-icons/io5'

export function LampHero() {
  const words = `My Name is Friend-Ly! 
	Your great companion! And Yes I am ready to get married!`
  return (
    <LampContainer>
      <SparklesBg>
        <div className="flex justify-between gap-10 w-full">
          <div className="text-white flex flex-col gap-10 pt-5 max-w-[800px] px-20 ">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hi, I'm Friend-Ly <br />
              <span className="text-2xl font-bold tracking-tight lg:text-3xl">
                and I just want to get married!
              </span>
            </h1>

            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <div className="flex gap-4  items-center">
              <Button
                color="secondary"
                variant="bordered"
                endContent={<GiBigDiamondRing />}
              >
                Propose
              </Button>
              <Button
                color="success"
                variant="bordered"
                startContent={<IoVideocam />}
              >
                Request a meeting
              </Button>
            </div>
          </div>
          <Image
            src="https://img.freepik.com/photos-gratuite/hommes-dans-simulateur-vr-futuriste-portant-lunettes-protection-ai-generative_188544-32094.jpg?w=1380&t=st=1707614798~exp=1707615398~hmac=246da87ecf35860dc1707c6e0c2204edd9f863d5b5149a7ae82078cf072f2224"
            alt="Friend-Ly"
            width={600}
            height={600}
          />
        </div>
      </SparklesBg>
      {/* <TextRevealCard
        className="w-full bg-slate-950 mt-10 border-0"
        text="You Wanna learn more about me? "
        revealText="Alright, let's go!"
      /> */}
    </LampContainer>
  )
}
