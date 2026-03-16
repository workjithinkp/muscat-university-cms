'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PageSection, resolveImageUrl, BlockContent } from '@/lib/api'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Props {
  tabs: PageSection[]
}

function sortList(list?: BlockContent[] | null) {
  if (!list || list.length === 0) return []
  return [...list].sort((a, b) => {
    const aSort = Number(a.sort) || 0
    const bSort = Number(b.sort) || 0
    return aSort - bSort
  })
}

/* ─── Tab 1: 3-col Card Grid with Icons ─── */
function TabCards({ section }: { section: PageSection }) {
  const list = sortList(section.list)
  const iconFallbacks = [
    '/images/impact-icon-01.png',
    '/images/impact-icon-02.png',
    '/images/impact-icon-03.png',
  ]

  return (
    <div className="px-4 py-4 2xl:px-8 2xl:py-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        {list.map((item, index) => (
          <div key={item.id || index}>
            <div className="group relative h-full bg-[#f6f6f6] px-6 py-6 transition duration-300 hover:bg-[#eeeeee]">
              <div className="relative mb-6 h-[90px] w-[90px]">
                <div className="bg-brand-200 absolute inset-0 scale-0 rounded-full transition duration-300 group-hover:scale-120"></div>
                <div className="relative">
                  <Image
                    src={
                      resolveImageUrl(item.i_1) ||
                      iconFallbacks[index % iconFallbacks.length]
                    }
                    alt="Icon"
                    width={90}
                    height={90}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                {item.c_1 && (
                  <h3 className="text-brand-100 mb-4 pb-1 text-2xl leading-none font-medium">
                    {item.c_1}
                  </h3>
                )}
                {item.c_2 && (
                  <div
                    className="text-gray-950"
                    dangerouslySetInnerHTML={{ __html: item.c_2 }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Tab 2: Interactive Expandable Panels ─── */
function TabPanels({ section }: { section: PageSection }) {
  const list = sortList(section.list)
  const [active, setActive] = useState(
    list.length > 0 ? (list[0].id || 1) : 1
  )
  const imgFallbacks = [
    '/images/academic-item-01.jpg',
    '/images/academic-item-02.jpg',
  ]

  return (
    <div className="px-4 py-4 2xl:px-8 2xl:py-8">
      <div className="mx-auto flex h-[500px] gap-1">
        {list.map((item, index) => {
          const itemId = item.id || index + 1
          return (
            <div
              key={itemId}
              onClick={() => setActive(itemId)}
              className={`flex gap-1 overflow-hidden transition-all duration-500 ${active === itemId ? 'flex-[6]' : 'flex-1'} `}>
              <div className="relative w-[225px] shrink-0 cursor-pointer">
                <div className="relative h-full">
                  <Image
                    src={
                      resolveImageUrl(item.i_1) ||
                      imgFallbacks[index % imgFallbacks.length]
                    }
                    width={225}
                    height={500}
                    className="h-full w-full object-cover"
                    alt="Image"
                  />
                  <div className="absolute right-0 bottom-0 left-0 h-full bg-linear-to-t from-black/75 to-black/0 transition duration-200 group-hover:h-[100%]"></div>
                </div>
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="origin-center -rotate-90 text-2xl font-medium text-white uppercase">
                    {item.c_1}
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-300 ${active === itemId ? 'flex-1 opacity-100' : 'w-0 flex-0 opacity-0'} `}>
                <div className="bg-brand-100 h-full px-6 py-6 xl:px-16 xl:py-16">
                  <div
                    className={`transition-all delay-500 duration-300 ${
                      active === itemId
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-1/4 opacity-0'
                    }`}>
                    <div className="mb-4">
                      {item.c_1 && (
                        <div className="relative mb-4 text-3xl font-medium text-white uppercase">
                          {item.c_1}
                        </div>
                      )}
                      {item.c_2 && (
                        <div
                          className="mb-4 font-medium text-white"
                          dangerouslySetInnerHTML={{ __html: item.c_2 }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Tab 3: 2-Col Image + Text Grid ─── */
function TabGrid({ section }: { section: PageSection }) {
  const list = sortList(section.list)
  const imgFallbacks = [
    '/images/impact-community-01.jpg',
    '/images/impact-community-02.jpg',
  ]

  return (
    <div className="px-4 py-4 2xl:px-8 2xl:py-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:gap-12">
        {list.map((item, index) => (
          <div key={item.id || index}>
            <div className="group relative">
              <div className="overflow-hidden">
                <Image
                  src={
                    resolveImageUrl(item.i_1) ||
                    imgFallbacks[index % imgFallbacks.length]
                  }
                  width={600}
                  height={200}
                  className="w-full transition duration-300 group-hover:scale-110"
                  alt="Image"
                />
              </div>
              <div className="px-6 py-6">
                {item.c_1 && (
                  <h3 className="text-brand-100 mb-4 text-2xl font-medium">
                    {item.c_1}
                  </h3>
                )}
                {item.c_2 && (
                  <div
                    className="text-gray-950"
                    dangerouslySetInnerHTML={{ __html: item.c_2 }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Tab 4: Image + Overlay Text ─── */
function TabOverlay({ section }: { section: PageSection }) {
  const block = section.block || {}
  const image =
    resolveImageUrl(block.i_1) || '/images/impact-infrastructure.jpg'

  return (
    <div className="px-4 py-4 2xl:px-8 2xl:py-8">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2">
        <div className="">
          <div>
            <Image
              src={image}
              width={750}
              height={450}
              className="w-full transition duration-300"
              alt="Image"
            />
          </div>
        </div>
        <div className="ml-[-200px] w-[calc(100%+200px)]">
          <div className="bg-brand-100 border-l-brand-300 relative border-s-[3px] px-8 py-12">
            {block.c_1 && (
              <h3 className="mb-4 text-2xl font-medium text-white">
                {block.c_1}
              </h3>
            )}
            {block.c_2 && (
              <div
                className="text-white"
                dangerouslySetInnerHTML={{ __html: block.c_2 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Tab 5: Metrics & Achievements Swiper ─── */
function TabMetrics({ section }: { section: PageSection }) {
  const list = sortList(section.list)
  const block = section.block || {}

  return (
    <div className="px-4 py-4 2xl:px-8 2xl:py-8">
      {block.c_2 && (
        <div className="mb-8">
          <h3 className="text-center text-2xl font-medium text-gray-950">
            {block.c_2}
          </h3>
        </div>
      )}
      {list.length > 0 && (
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1500}
          spaceBetween={20}
          observer={true}
          observeParents={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          navigation={{
            prevEl: '.achieve-button-prev',
            nextEl: '.achieve-button-next',
          }}
          modules={[Autoplay, Navigation]}
          className="swiper-achieve">
          {list.map((item, index) => (
            <SwiperSlide
              className="border-r-brand-300 border-r-[2px]"
              key={item.id || index}>
              <div
                className="group m-auto min-h-[225px] px-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1500">
                {item.c_1 && (
                  <div className="text-brand-100 mb-4 text-center text-5xl leading-none font-bold">
                    <span className="count-num" data-count={item.c_1}>
                      {item.c_1}
                    </span>
                    {item.t_1 || ''}
                  </div>
                )}
                {item.c_2 && (
                  <div className="mb-4 text-center text-xl leading-none font-medium text-gray-950">
                    {item.c_2}
                  </div>
                )}
                {item.c_3 && (
                  <div className="text-center text-gray-950">{item.c_3}</div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

/* ─── Tab Content Router ─── */
function renderTabContent(section: PageSection) {
  const template = section.section?.template
  switch (template) {
    case 'our-impact-tab-1':
      return <TabCards section={section} />
    case 'our-impact-tab-2':
      return <TabPanels section={section} />
    case 'our-impact-tab-3':
      return <TabGrid section={section} />
    case 'our-impact-tab-4':
      return <TabOverlay section={section} />
    case 'our-impact-tab-5':
      return <TabMetrics section={section} />
    default:
      return <TabCards section={section} />
  }
}

/* ─── Main Accordion ─── */
export default function ImpactAccordion({ tabs }: Props) {
  const defaultValues = tabs.map((_, i) => `item-${i + 1}`)

  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={defaultValues}>
      {tabs.map((tab, index) => (
        <AccordionItem key={tab.id || index} value={`item-${index + 1}`}>
          <AccordionTrigger className="!text-brand-100 bg-brand-100/2 !border-l-brand-300 border-brand-100/50 rounded-none border-1 border-l-[3px] px-2 text-xl font-medium text-gray-800 hover:no-underline">
            {index + 1}. {tab.block?.c_1 || `Section ${index + 1}`}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {renderTabContent(tab)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
