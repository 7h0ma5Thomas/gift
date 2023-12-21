import React from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'

type PlayerProps = {
  className: string
}

export default function Player({ className }: PlayerProps) {
  return (
    <div className={className}>
      <AspectRatio ratio={16 / 9} className="z-50">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ME0goN-Uppg?si=Zl5xOHfNgXb6sMW9"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </div>
  )
}
