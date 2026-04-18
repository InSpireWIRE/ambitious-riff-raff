"use client"

import Image from "next/image"

interface AR2MarkProps {
  size?: number
  className?: string
}

export default function AR2Mark({ size = 400, className = "" }: AR2MarkProps) {
  return (
    <Image
      src="/ar2-logo.png"
      alt="Ambitious Riff Raff"
      width={size}
      height={size}
      priority
      className={`object-contain ${className}`}
    />
  )
}