import Link from 'next/link'
import Image from 'next/image'

import DynamicBreadcrumb from '@/components/common/breadcrumb'
import CampusFacilities from '@/app/campus-life/components/campus-facilities'
import CampusBeyond from '@/app/campus-life/components/campus-beyond'
import CampusTestimonials from '@/app/campus-life/components/campus-testimonials'

import { LuArrowUpRight } from 'react-icons/lu'

const involveData = [
  {
    id: 1,
    icon: '/images/campus-involve-icon-01.png',
    title: 'Theatre Club',
    desc: 'take the stage and express yourself.',
  },
  {
    id: 2,
    icon: '/images/campus-involve-icon-02.png',
    title: 'Photography Club',
    desc: 'Capture campus life, one shot at a time.',
  },
  {
    id: 3,
    icon: '/images/campus-involve-icon-03.png',
    title: 'Music Club',
    desc: 'Jam, perform, and explore new sounds.',
  },
  {
    id: 4,
    icon: '/images/campus-involve-icon-04.png',
    title: 'Yusr Voluntary Club',
    desc: 'Give back through community service.',
  },
  {
    id: 4,
    icon: '/images/campus-involve-icon-04.png',
    title: 'Sports Club',
    desc: 'Take the stage and express yourself.',
  },
  {
    id: 4,
    icon: '/images/campus-involve-icon-06.png',
    title: 'Events Organizers Club',
    desc: 'Make campus life unforgettable.',
  },
  {
    id: 4,
    icon: '/images/campus-involve-icon-07.png',
    title: 'Finds Yourself Club',
    desc: 'Personal growth, self-discovery, and leadership.',
  },
  {
    id: 4,
    icon: '/images/campus-involve-icon-08.png',
    title: 'Media Club',
    desc: 'Tell the stories that matter.',
  },
]

export default function CampusPage() {
  return (
    <>
      <section className="relative pt-[160px] pb-[72px]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-campus-slider.jpg"
            width={1920}
            height={900}
            className="h-full w-full object-cover"
            alt="Hero"
          />
        </div>

        <div className="relative mb-[48px] border-b-[1px] border-b-white/20 pb-3">
          <div className="container mx-auto">
            <DynamicBreadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'MU Life', href: '#' },
                { label: 'Campus Life', href: null },
              ]}
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_450px] xl:gap-8 2xl:grid-cols-[1fr_550px]">
            <div>
              <div className="max-w-[750px] pt-32">
                <h2
                  className="mb-4 text-6xl leading-none font-medium text-white uppercase"
                  data-lines-slide-up>
                  Campus Life at Muscat University
                </h2>
                <h3
                  className="mb-4 text-2xl/7 font-medium text-white"
                  data-lines-slide-up>
                  Your Journey. Your People. Your Place to Grow.
                </h3>
                <p className="text-lg text-white" data-lines-slide-up>
                  At Muscat University, life on campus is more than just
                  lectures and labs — it&apos;s a place where ambitions take
                  shape, friendships flourish, and every experience helps you
                  discover who you are. Whether you&apos;re studying, competing,
                  performing, or just hanging out with friends, you&apos;ll find
                  a community that inspires you to dream big and make it happen.
                </p>
              </div>
            </div>
            <div>
              <div className="max-w-[460px]">
                <Image
                  src="/images/campus-intro.png"
                  width={462}
                  height={592}
                  alt="Image"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-18 pb-9">
        <div className="container mx-auto">
          <h2 className="after:bg-brand-300 text-brand-100 relative mb-6 pb-4 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            Student Services & Support
          </h2>
          <div className="relative mb-8 min-h-[360px] lg:mb-12">
            <div className="absolute inset-0">
              <Image
                src="/images/campus-service.jpg"
                width={1500}
                height={375}
                className="h-full w-full object-cover"
                alt="Student Services & Support"
              />
            </div>
            <div className="relative z-10 px-8 py-8 lg:px-[48px] lg:pt-[90px]">
              <div className="max-w-[900px]">
                <div className="max-w-[550px]">
                  <h3 className="relative mb-4 text-3xl font-medium text-white">
                    Because You Deserve to Thrive — <br /> In and Out of the
                    Classroom
                  </h3>
                </div>
                <h4 className="text-xl font-medium text-white">
                  We&apos;re here to make sure every student feels supported,
                  seen, and set up for success. Our dedicated teams are ready to
                  help you through every step of your university journey.
                </h4>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <h3 className="border-l-brand-300 text-brand-100 mb-4 border-l-2 ps-4 text-2xl font-medium">
                Student Support Unit
              </h3>
              <p className="ps-4">
                Your first stop for any question or concern. Whether it&apos;s
                guidance, paperwork, or academic advice, our friendly team
                connects you to the right people fast.
              </p>
            </div>
            <div>
              <h3 className="border-l-brand-300 text-brand-100 mb-4 border-l-2 ps-4 text-2xl font-medium">
                Counselling & Well-being
              </h3>
              <p className="ps-4">
                University life can be exciting — and sometimes overwhelming.
                Our professional counsellors offer confidential support to help
                you stay balanced, motivated, and mentally strong.
              </p>
            </div>
            <div>
              <h3 className="border-l-brand-300 text-brand-100 mb-4 border-l-2 ps-4 text-2xl font-medium">
                Inclusive & Accessible
              </h3>
              <p className="ps-4">
                We&apos;re proud to provide an inclusive campus experience. The
                Student Support Unit ensures that students with disabilities
                have equal access to all facilities — from specialized parking
                and entrances to adaptive learning tools.
              </p>
            </div>
            <div>
              <h3 className="border-l-brand-300 text-brand-100 mb-4 border-l-2 ps-4 text-2xl font-medium">
                Learning Support & Study Spaces
              </h3>
              <p className="ps-4">
                The Learning Resource Centre (LRC) is where focus meets
                collaboration. Find quiet corners for deep study, group rooms
                for teamwork, and expert staff ready to guide you through
                research and academic challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section className="pt-9 pb-9">
        <div className="container mx-auto">
          <h2 className="after:bg-brand-300 text-brand-100 relative mb-6 pb-4 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            Facilities That Inspire Success
          </h2>
          <div className="relative mb-8 min-h-[360px] lg:mb-12">
            <div className="absolute inset-0">
              <Image
                src="/images/campus-facilities.jpg"
                width={1500}
                height={375}
                className="h-full w-full object-cover"
                alt="Student Services & Support"
              />
            </div>
            <div className="relative z-10 px-8 py-8 lg:px-[48px] lg:pt-[90px]">
              <div className="max-w-[900px]">
                <div className="max-w-[550px]">
                  <h3 className="relative mb-4 text-3xl font-medium text-white">
                    Smart. Modern. <br />
                    Designed for You.
                  </h3>
                </div>
                <h4 className="text-xl font-medium text-white">
                  Our campus combines innovation with comfort — everything you
                  need to learn, connect, and unwind.
                </h4>
              </div>
            </div>
          </div>
          <div>
            <CampusFacilities />
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <h2 className="after:bg-brand-300 text-brand-100 relative mb-6 pb-4 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            Get Involved: Clubs & Societies
          </h2>
          <div className="relative mb-8 min-h-[360px] lg:mb-12">
            <div className="absolute inset-0">
              <Image
                src="/images/campus-involve.jpg"
                width={1500}
                height={375}
                className="h-full w-full object-cover"
                alt="Student Services & Support"
              />
            </div>
            <div className="relative z-10 px-8 py-8 lg:px-[48px] lg:pt-[90px]">
              <div className="max-w-[900px]">
                <div className="max-w-[550px]">
                  <h3 className="relative mb-4 text-3xl font-medium text-white">
                    Find Your People. <br />
                    Lead. Create. Belong.
                  </h3>
                </div>
                <h4 className="text-xl font-medium text-white">
                  Whatever sparks your passion, there&apos;s a club for it — and
                  if not, you can start your own! Connect with others who share
                  your energy, interests, and drive to make a difference.
                </h4>
              </div>
            </div>
          </div>
          <div className="px-20">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {involveData.map((item, index) => (
                <div className="group" key={`involve-${item.id}-${index}`}>
                  <div className="relative mb-2 h-[100px] w-[100px] rounded-full">
                    <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-90"></div>
                    <div className="relative z-10 flex h-full w-full items-center justify-center">
                      <Image
                        src={item.icon}
                        width={100}
                        height={100}
                        className="relative z-5 w-full max-w-[100px] transition-all duration-300 group-hover:scale-75"
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-brand-100 mb-2 text-2xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-gray-950">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">
            <div className="me-[-200px] w-[calc(100%+200px)]">
              <div className="bg-brand-100 border-e-brand-300 relative border-e-[3px] px-8 py-12">
                <h3 className="mb-4 text-2xl font-medium text-white">
                  Start Something New
                </h3>
                <h4 className="text-brand-200 mb-4 text-2xl font-medium">
                  Have an idea that doesn&opos;t fit into an existing club?
                  Create your own!
                </h4>
                <p className="text-white">
                  The Student Affairs team will guide you through every step —
                  from proposal to launch. Email sa@muscatuniversity.edu.om to
                  begin your journey.
                </p>
              </div>
            </div>
            <div className="">
              <div>
                <Image
                  src="/images/campus-existing.jpg"
                  width={870}
                  height={450}
                  className="w-full transition duration-300"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <h2 className="after:bg-brand-300 text-brand-100 relative mb-6 pb-4 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            Beyond the Classroom
          </h2>
          <div className="relative mb-8 min-h-[360px] lg:mb-12">
            <div className="absolute inset-0">
              <Image
                src="/images/campus-beyond.jpg"
                width={1500}
                height={375}
                className="h-full w-full object-cover"
                alt="Student Services & Support"
              />
            </div>
            <div className="relative z-10 px-8 py-8 lg:px-[48px] lg:pt-[90px]">
              <div className="max-w-[900px]">
                <div className="max-w-[550px]">
                  <h3 className="relative mb-4 text-3xl font-medium text-white">
                    Experience. Leadership. <br />
                    Impact.
                  </h3>
                </div>
                <h4 className="text-xl font-medium text-white">
                  We believe learning happens everywhere — not just in lecture
                  halls. That&apos;s why Muscat University offers countless
                  opportunities to grow through real-world experiences.
                </h4>
              </div>
            </div>
          </div>
          <div>
            <CampusBeyond />
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section className="pt-9 pb-18">
        <div className="container mx-auto">
          <h2 className="after:bg-brand-300 text-brand-100 relative mb-6 pb-4 text-3xl font-medium uppercase after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[80px] after:content-['']">
            A Campus that Feels Like Home
          </h2>
          <div className="relative mb-8 min-h-[360px] lg:mb-12">
            <div className="absolute inset-0">
              <Image
                src="/images/campus-beyond.jpg"
                width={1500}
                height={375}
                className="h-full w-full object-cover"
                alt="Student Services & Support"
              />
            </div>
            <div className="relative z-10 px-8 py-8 lg:px-[48px] lg:pt-[90px]">
              <div className="max-w-[900px]">
                <div className="max-w-[550px]">
                  <h3 className="relative mb-4 text-3xl font-medium text-white">
                    Where Every Corner <br />
                    Tells a Story
                  </h3>
                </div>
                <h4 className="text-xl font-medium text-white">
                  From morning coffee with friends to late-night study sessions,
                  from club performances to community service — Muscat
                  University is more than a campus. It’s a place where ambition
                  meets opportunity, and where every day brings something new to
                  explore.
                </h4>
              </div>
            </div>
          </div>
          <div>
            <CampusTestimonials />
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="h-[1px] bg-gray-200"></div>
      </div>

      <section className="relative bg-[url('/images/campus-virtual-bg.jpg')] bg-cover bg-fixed bg-center pt-18 pb-18">
        <div className="absolute inset-0 m-auto h-[50px] w-[50px]">
          <Image
            src="/images/virtual-icon.png"
            width={90}
            height={90}
            alt="Icon"
          />
        </div>
        <div className="container mx-auto">
          <div className="max-w-[500px]">
            <h3 className="mb-4 text-3xl font-medium text-white">
              Can&apos;t wait to see it in person?
            </h3>
            <div className="mb-4 max-w-[300px]">
              <Link
                className="group flex w-full border-[1px] border-white text-white transition duration-300 hover:bg-white md:flex-1"
                href="/">
                <span className="group-hover:text-brand-100 flex-1 px-4 py-2">
                  Explore Programmes
                </span>
                <span className="group-hover:text-brand-100 flex flex-0 items-center justify-center border-l-[1px] border-white px-4 py-2 text-xl">
                  <LuArrowUpRight className="transition duration-300 group-hover:rotate-45" />
                </span>
              </Link>
            </div>
            <p className="text-white">
              Step inside our lecture halls, labs, and student spaces to get a
              glimpse of the Muscat University experience.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
