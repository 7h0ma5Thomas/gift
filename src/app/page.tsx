'use client'

import Player from '@/components/widgets/player'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const [hideGift, setHideGift] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const [showTitle, setShowTitle] = useState(true)

  const handleClick = () => {
    setIsAnimationComplete(true)
  }

  const handleAnimationEnd = () => {
    if (isAnimationComplete) {
      setHideGift(false)
      setShowVideo(true)
      setShowTitle(false)
    }
  }

  return (
    <main className="w-full h-screen relative flex flex-col items-center before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full md:h-full">
      {!isAnimationComplete ? (
        <video
          className={`h-screen w-full object-cover absolute select-none`}
          src="assets/noel2.mp4"
          autoPlay
          muted
          loop
        ></video>
      ) : (
        <Image
          className={`h-screen w-full object-cover absolute select-none`}
          src="/assets/bg.png"
          alt="Salon avec un sapin de noêl, ses cadeaux et sa cheminée allumée"
          width={1920}
          height={1080}
        />
      )}
      <div className="z-50 absolute w-full h-screen flex flex-col items-center justify-between py-3 md:w-11/12 lg:w-1/2 xl:w-[60%] 2xl:w-[60%]">
        <h1 className="text-5xl font-bold text-white 2xl:text-6xl titleAnim">
          Ho Ho Ho
        </h1>
        <div className="drop relative flex flex-col items-center">
          <Image
            src="/assets/giftTop.png"
            alt="un cadeaux"
            width={300}
            height={300}
            onClick={handleClick}
            onAnimationEnd={handleAnimationEnd}
            className={`cursor-pointer w-1/2 ${
              isAnimationComplete ? `animateTop` : ''
            } ${hideGift ? '' : 'hidden'}`}
          />
          <Image
            src="/assets/giftBottom.png"
            alt="un cadeaux"
            width={300}
            height={300}
            onClick={handleClick}
            onAnimationEnd={handleAnimationEnd}
            className={`cursor-pointer w-1/2 ${
              isAnimationComplete ? `animateBottom` : ''
            } ${hideGift ? '' : 'hidden'}`}
          />
        </div>
        <Player
          className={`w-11/12 h-auto absolute top-[30%] xl:top-[20%] xl:w-full 2xl:top-[15%] ${
            showVideo ? '' : 'hidden'
          }`}
        />
        <h2
          className={`blink text-xl font-bold text-white 2xl:text-3xl ${
            showTitle ? '' : 'hidden'
          }`}
        >
          Clique sur le cadeau
        </h2>
      </div>
    </main>
  )
}
