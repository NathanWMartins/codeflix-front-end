import Image from 'next/image';

type MovieRowProps = {
    sectionTitle: string;
};

type MovieCardProps = {
    index: number;
};

const MovieCard = ({ index }: MovieCardProps) => (
    <div 
        className="group h-24 min-w-[120px] relative transform bg-gradient-to-b from-transparent to-black transition hover:z-50
              duration-200 ease-in hover:scale-110 md:h-32 md:min-w-[180px] lg:h-40 lg:min-w-[300px]"
    >
        <Image
            src={`/images/footballGames/game${index}.jpeg`}
            fill={true}
            alt='Games'
            className="rounded"
        />
    </div>
);

export function MovieRow({ sectionTitle }: MovieRowProps) {
    return (
        <div className='flex-col space-y-2'>
            <div className='flex'>
                <h2 className='my-10 inline-flex items-center text-2xl font-bold'>
                    {sectionTitle}
                </h2>
            </div>
            <div className="flex space-x-4 overflow-x-scroll p-6 no-scrollbar w-full">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <MovieCard key={index} index={index}/>
                ))}
            </div>
        </div>
    );
}