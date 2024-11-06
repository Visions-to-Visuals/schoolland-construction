import experienceData from './experience-data';
import Image from 'next/image';

export default function Experience() {

    function ExperienceItem({ text, year, image }) {
        return (
            <div className='flex justify-center mx-auto gap-[5rem] items-start tablet-s:gap-[2rem] mobile:gap-[3rem]  top-[5rem] z-10 tablet-s:flex-col tablet-s:items-center tablet-s:top-[7rem] mobile:top-[8rem]'>
                <Image src={image} width={500} height={500} alt='Photo' className='w-[30rem] aspect-[3/2] rounded-[2rem] tablet-s:w-[18rem] tablet-s:rounded-[1.5rem] mobile:w-[20rem]'></Image>
                <Image src="/images/circle.png" width={300} height={300} alt='Photo' className='w-[5rem] h-[5rem] rounded-[2rem] tablet-s:z-[10] tablet-s:hidden'></Image>
                <div className='flex-col w-[30rem] text-primary bg-accent px-[2rem] tablet-s:px-[1rem] py-[1rem] rounded-[2rem] tablet-s:w-[26rem] mobile:w-[24rem] laptop-s:z-[20]'>
                    <h2 className='text-[3rem] font-[600] tracking-widest tablet-s:text-center tablet-s:text-[2rem] mobile:mb-2'>{year}</h2>
                    <p className='text-[1.2rem] tablet-s:text-[.9rem] tablet-s:text-center tablet-s:mb-4'>{text}</p>
                </div>
                <Image src="/images/circle.png" width={300} height={300} alt='Photo' className='w-[5rem] h-[5rem] rounded-[2rem] tablet-s:z-[10] hidden tablet-s:flex'></Image>
            </div>
        )
    }

    return (
        <section className="px-[2rem] mobile:px-[1rem] relative">
            <h1 className="text-primary tracking-wide mb-[5rem]">INTRODUCING OVER 50 YEARS OF EXPERIENCE</h1>
            <div className="flex justify-center">
                <div className="w-[.8rem] bg-primary absolute top-[15rem] bottom-0 m-auto mx-0 tablet-s:top-[17rem] mobile:top-[22rem]"></div>
            </div>
            <div className='flex flex-col gap-[10rem] mb-[5rem] laptop-s:mb-[10rem]'>
                {experienceData.map((item, index) => (
                    <ExperienceItem
                        key={index}
                        text={item.text}
                        year={item.year}
                        image={item.image}
                    />
                ))}
            </div>
            <Image width={400} height={400} alt='background' src="/images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-20 z-[0] pointer-events-none" />
        </section>
    )
}