import { InformationCircleIcon, PlayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export function Banner() {
  return (
    <div className='mb-10 lg:mb-20'>
      <div className='flex flex-col space-y-4 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
        <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>

          <Image
            src='/images/ChampionsLeagueFinal.jpg'
            alt='Champions League Final'
            fill={true}
            className="h-[65vh] object-cover object-top lh:h-[95vh]"
          />
        </div>
        <h1 className="font-bold md:text-4xl lg:text-5xl">
          CL FINAL 2025
        </h1>
        <p className="text-shadow-md max-w-xs text-[10px] md:max-w-md md:text-sm lg:max-w-sm lg:text-base">
          Champions League Final between Barcelona vs Real Madrid,
          the greatest final of all time will be playd in Munich at 17 o'clock.
        </p>
      </div>

      <div className="flex space-x-3">
        <button className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'
        >
          <PlayIcon className='h-6' />
          Watch Now
        </button>
        <button className="md:text-xl; flex cursor-pointer items-center gap-xp-2 rounded bg-gray-400 text-black 
              font-semibold py-1.5 text-sm px-5 transaction hover:opacity-75 md:px-8 md:py-2.5">
          <InformationCircleIcon className="h-6" />
          More Info
        </button>
      </div>
    </div>
  )
}