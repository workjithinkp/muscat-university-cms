import Image from 'next/image'
import Link from 'next/link'

import { LuArrowUpRight } from 'react-icons/lu'

export default function CareerSection() {
  return (
    <>
      <section className="relative bg-[url('/images/discover-programme-bg.jpg')] bg-cover bg-center pt-12 xl:min-h-[980px] xl:pt-0">
        <div className="container mx-auto flex h-full items-center">
          <div
            className="relative z-10 max-w-[750px] xl:pt-[250px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500">
            <h2
              data-words-slide-right
              className="text-4xl leading-none font-bold text-white uppercase xl:text-7xl">
              FAST TRACK YOUR CAREER WITH PROGRAMES POWERED BY{' '}
              <span className="text-brand-100">professional qualification</span>
            </h2>
            <Link
              className="group bg-brand-200 mt-8 inline-flex flex-1 text-white transition duration-300 hover:bg-[#004685]"
              href="/">
              <span className="flex-1 px-4 py-3 text-xl group-hover:text-white">
                Discover Postgraduate Programmes
              </span>
              <span className="border-brand-200 flex flex-0 items-center justify-center border-l-[1px] px-4 py-3 text-xl group-hover:border-white group-hover:text-white">
                <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full xl:absolute xl:right-[10%] xl:bottom-0 xl:w-[1100px]">
          <Image
            src="/images/discover-programme.png"
            alt="Discover Programme"
            width={1200}
            height={980}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  )
}
