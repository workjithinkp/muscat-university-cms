import Image from 'next/image'

const partnerData = [
  {
    id: 1,
    logo: '/images/partner-logo-01.png',
    alt: 'Logo',
  },
  {
    id: 2,
    logo: '/images/partner-logo-02.png',
    alt: 'Logo',
  },
  {
    id: 3,
    logo: '/images/partner-logo-03.png',
    alt: 'Logo',
  },
  {
    id: 4,
    logo: '/images/partner-logo-04.png',
    alt: 'Logo',
  },
  {
    id: 5,
    logo: '/images/partner-logo-05.png',
    alt: 'Logo',
  },
  {
    id: 6,
    logo: '/images/partner-logo-06.png',
    alt: 'Logo',
  },
  {
    id: 7,
    logo: '/images/partner-logo-07.png',
    alt: 'Logo',
  },
  {
    id: 8,
    logo: '/images/partner-logo-08.png',
    alt: 'Logo',
  },
]

export default function PartnerSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[url('/images/partners-bg.jpg')] bg-cover bg-fixed bg-center py-18">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="mb-4">
                <h2
                  className="text-3xl font-medium text-white lg:text-4xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500">
                  <span className="after:bg-brand-300 relative inline-block pb-4 uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[90px] after:content-['']">
                    International partners
                  </span>
                </h2>
              </div>
            </div>

            {partnerData.map((item, index) => (
              <div className="w-1/2 lg:w-1/3 xl:w-1/4" key={index}>
                <div className="mx-auto max-w-[150px] px-4 py-4 md:max-w-[200px] xl:py-12">
                  <Image
                    src={item.logo}
                    width={200}
                    height={100}
                    className="w-full"
                    alt={item.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
