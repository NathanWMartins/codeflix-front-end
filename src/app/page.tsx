import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]">
      <Header></Header>
      <main className="relative pb-24 pl-4 lg:pl-16">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className="absolute left-0 top-0 -z-10 h-[95vh] w-screen flex-col bg-black">
            <Image
              src='/images/ChampionsLeagueFinal.jpg'
              alt='Champions League Final'
              fill={true}
              className="h-[65vh] object-cover object-top lh:h-[95vh]"
            />
          </div>

          <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            CL FINAL 2025
          </h1>

          <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
            Champions League Final between Barcelona vs Real Madrid, 
            the greatest final of all time will be playd in Munich at 17 o'clock.
          </p>
        </div>

        <div className="flex space-x-3">
          <button className="md:text-xl; flex cursor-pointer items-center gap-xp-2 rounded bg-white text-black 
          font-semibold py-1.5 text-sm px-5 transaction hover:opacity-75 md:px-8 md:py-2.5">
            Play
          </button>
          <button className="md:text-xl; flex cursor-pointer items-center gap-xp-2 rounded bg-gray-400 text-black 
          font-semibold py-1.5 text-sm px-5 transaction hover:opacity-75 md:px-8 md:py-2.5">
            More Info
          </button>
        </div>

      </main>
    </div>
  );
}
