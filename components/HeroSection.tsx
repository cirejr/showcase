import React from 'react'
import { SparklesBg } from './SparkesBg'
import TopNavbar from './ui/TopNavbar'

export default function HeroSection({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center h-screen"
      style={{
        backgroundImage: 'url(/asset/hero-section-bg4.webp)',
      }}
    >
      <div className="absolute inset-0 bg-slate-900 bg-opacity-40">
        <TopNavbar />
        {children}
      </div>
    </div>
  )
}
