import Socials from '@/components/Socials';
import { HeroHighlight, Highlight } from '@/components/UI/HeroHighlight';
import { about } from '@/utils/data';
import { Button, Image, Link } from '@nextui-org/react';
import { ChevronRight, DownloadIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Patel's Portfolio | Home",
    openGraph: {
      title: "Patel's Portfolio | Home",
      url: "https://saifhamdare-portfolio.netlify.app",
      images: [
        {
          url: "https://i.ibb.co/5k6rdvF/tabicon.png",
          alt: "portfolio-logo",
        },
      ],
    },
    twitter: {
      title: "Patel's Portfolio | Home",
      images: [
        {
          url: "https://i.ibb.co/5k6rdvF/tabicon.png",
          alt: "portfolio-logo",
        },
      ],
    },
  };
export default function Home() {
    return (
        <>
            <HeroHighlight className='px-6'>
                <div className='grid lg:grid-cols-2 gap-8 lg:gap-0 items-center'>
                    <div className='justify-self-center'>
                        <Image
                            src='/IMG_1671.webp'
                            alt={about.name}
                            className='opacity-100 rounded bg-slate-300 dark:bg-slate-900 dark:to-purple-500 w-[300px] md:w-[400px] lg:w-[600px]'
                        />
                    </div>
                    <div className='z-10 text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center lg:text-left mx-auto '>
                        <p className='text-4xl md:text-5xl lg:text-8xl mb-4'>
                            I'm {about.name}
                        </p>
                        <div>
                            <Highlight className='text-black dark:text-white block'>
                                {about.position}
                            </Highlight>
                        </div>
                        <Button
                            variant='solid'
                            color='secondary'
                            size='sm'
                            className='mt-16 inline-flex md:hidden'
                            as={Link}
                            href='/Resume.pdf'
                            download={'Darshan_Patel_resume_2024_Vancouver'}
                        >
                            Download Resume <DownloadIcon size={22} />
                        </Button>
                        <Button
                            variant='solid'
                            color='secondary'
                            size='lg'
                            className='mt-16 hidden md:inline-flex'
                            as={Link}
                            href='/Resume.pdf'
                            download={'Darshan_Patel_resume_2024_Vancouver'}
                        >
                            Download Resume <DownloadIcon size={22} />
                        </Button>
                        <Button
                            variant='faded'
                            color='secondary'
                            size='sm'
                            className='mt-16 inline-flex md:hidden ml-2'
                            as={Link}
                            href='/about'
                        >
                            Know More <ChevronRight size={18} />
                        </Button>
                        <Button
                            variant='faded'
                            color='secondary'
                            size='lg'
                            className='mt-16 hidden md:inline-flex ml-2'
                            as={Link}
                            href='/about'
                        >
                            Know More <ChevronRight size={18} />
                        </Button>
                        <Socials />
                    </div>
                </div>
            </HeroHighlight>
        </>
    );
}