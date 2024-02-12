'use client'
import React from 'react'
import { SparklesCore } from '@/components/ui/Sparkles'
import { cn } from '@/utils/cn'

export function SparklesBg({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'h-full relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md',
        className
      )}
    >
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {children}
    </div>
  )
}
