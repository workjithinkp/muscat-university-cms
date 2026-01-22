import Image from 'next/image'
import Link from 'next/link'

export default function FutureSection() {
  return (
    <>
      <section className="bg-brand-100 relative">
        <div className="container mx-auto">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 lg:w-1/2">
              <div className="group flex space-x-1">
                {/* ITEM 1 */}
                <div className="group/item relative flex-1">
                  <div className="relative overflow-hidden transition duration-300 group-hover:grayscale group-hover/item:!grayscale-0">
                    <Image
                      src="/images/shaping-future-01.jpg"
                      alt="Icon"
                      width={260}
                      height={830}
                      className="h-full w-full transition duration-300 group-hover/item:scale-110"
                    />
                  </div>

                  <div className="bg-brand-200 absolute top-0 right-[72px] z-10 h-[72px] origin-top-right -rotate-90 px-4 py-4 text-2xl font-medium tracking-[0.1em] whitespace-nowrap text-white">
                    QUALITY ASSURANCE
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="group/item relative flex-1">
                  <div className="relative overflow-hidden transition duration-300 group-hover:grayscale group-hover/item:!grayscale-0">
                    <Image
                      src="/images/shaping-future-02.jpg"
                      alt="Icon"
                      width={260}
                      height={830}
                      className="h-full w-full transition duration-300 group-hover/item:scale-110"
                    />
                  </div>

                  <div className="bg-brand-200 absolute top-0 right-[72px] z-10 h-[72px] origin-top-right -rotate-90 px-4 py-4 text-2xl font-medium tracking-[0.1em] whitespace-nowrap text-white">
                    SUSTAINABILITY
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="group/item relative flex-1">
                  <div className="relative overflow-hidden transition duration-300 group-hover:grayscale group-hover/item:!grayscale-0">
                    <Image
                      src="/images/shaping-future-03.jpg"
                      alt="Icon"
                      width={260}
                      height={830}
                      className="h-full w-full transition duration-300 group-hover/item:scale-110"
                    />
                  </div>

                  <div className="bg-brand-200 absolute top-0 right-[72px] z-10 h-[72px] origin-top-right -rotate-90 px-4 py-4 text-2xl font-medium tracking-[0.1em] whitespace-nowrap text-white">
                    COMMUNITY IMPACT
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-3 lg:w-1/2">
              <div className="py-6 xl:ps-[100px] xl:pt-[100px]">
                <div className="max-w-[500px]">
                  <h2
                    data-words-slide-right
                    className="text-3xl leading-none font-bold text-white lg:text-5xl">
                    SHAPING THE FUTURE OF OMAN AND BEYOND.
                  </h2>
                  <div className="bg-brand-300 mt-6 mb-6 h-[2px] max-w-[275px] xl:mt-10 xl:mb-10"></div>
                  <p data-words-slide-right className="mb-4 text-lg text-white">
                    At Muscat University, we are committed to making a
                    meaningful difference—through education, innovation, and
                    community engagement.
                  </p>
                  <p data-words-slide-right className="text-lg text-white">
                    Our impact goes beyond the classroom, empowering students,
                    supporting industries, and contributing to the social and
                    economic development of Oman. Here are the key areas where
                    our university is making a lasting difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
