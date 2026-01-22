'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronDown } from 'lucide-react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CgMenuMotion } from 'react-icons/cg'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

import { Separator } from '@/components/ui/separator'

const navData = [
  {
    label: 'Study',
    submenu: [
      {
        title: 'Undergraduate',
        links: [
          { label: 'Programmes', href: '/programmes' },
          { label: 'General Foundation Programme', href: '#' },
          { label: 'Placement', href: '#' },
          { label: 'Admissions', href: '/admission' },
          { label: 'Transfer Student', href: '#' },
          { label: 'Contact us', href: '/contact-us' },
        ],
      },
      {
        title: 'Postgraduate',
        links: [
          { label: 'Programmes', href: '#' },
          { label: 'Admissions', href: '/admission' },
          { label: 'Contact us', href: '/contact-us' },
        ],
      },
      {
        title: 'International',
        href: 'international-students',
        links: [
          {
            label: 'Why study at MU?',
            href: '/international-students#why-choose',
          },
          {
            label: 'Visa Guidance',
            href: '/international-students#visa-immigration',
          },
          {
            label: 'Accommodation',
            href: '/international-students#accommodation-arrival',
          },
          { label: 'International Office', href: '#' },
        ],
      },
    ],
  },

  {
    label: 'Academics',
    submenu: [
      {
        title: 'Faculty of Engineering and Technology',
        href: '/faculty-engineering',
      },
      { title: 'Faculty of Business and Management', href: '#' },
      { title: 'Faculty of Transport and Logistics', href: '#' },
      {
        title: 'English Language Centre',
        links: [{ label: 'Academic Support Centre', href: '#' }],
      },
      { title: 'Learning resource centre', href: '#' },
    ],
  },

  {
    label: 'Research',
    submenu: [
      {
        title: 'Overview ',
        links: [
          { label: 'About Research & Innovation', href: '/research' },
          { label: 'Postgraduate Research', href: '#' },
          { label: 'Contact Us', href: '/contact-us' },
        ],
      },
      {
        title: 'Research and Innovation Centres',
        links: [
          { label: 'Business & Management  Centre', href: '#' },
          { label: 'Engineering & Technology   Centre', href: '#' },
          { label: 'Logistics and Supply Chain Centre', href: '#' },
        ],
      },
      {
        title: 'Resources & Impact',
        links: [
          { label: 'Publications & Achievements', href: '#' },
          { label: 'Research Facilities', href: '#' },
        ],
      },
    ],
  },

  {
    label: 'MU Life',
    submenu: [
      { title: 'Student Advisory Council ', href: '#' },
      { title: 'Campus Life', href: '/campus-life' },
      { title: 'Virtual Tour', href: '#' },
    ],
  },

  {
    label: 'About',
    submenu: [
      { title: ' MU at a Glance', href: '/MU-glance' },
      { title: 'Leadership & Governance', href: '/leadership' },
      {
        title: 'Quality Assurance & Accreditation',
        href: '/quality-assurance',
      },
      { title: 'Partnerships & Affiliations', href: '#' },
      { title: 'Our Impact', href: '/our-impact' },
    ],
  },
]

const mobileMenuData = [
  {
    label: 'Connect',
    submenu: [
      'MU Academy',
      'Workshops & Conferences',
      'Alumni',
      'Jobs & Career at MU',
      'Social Media (Social Media Feed)',
    ],
  },
  { label: 'Departments' },
  { label: 'Upcoming Events' },
  { label: 'Student’s Voices' },
  { label: 'My MU (student services)' },
  { label: 'Visual Identity' },
  { label: 'News and Media' },
]

export default function NavbarSection() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [open, setOpen] = useState(false)
  return (
    <header
      className={`fixed inset-x-0 z-[999] flex flex-col backdrop-blur-[6px] transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-[10px]' : 'bg-transparent backdrop-blur-none'}`}>
      <div className="container mx-auto flex justify-end !px-0">
        <div className="flex">
          <div className="bg-brand-300 relative flex px-2 py-2 sm:px-4">
            <Link
              className="hover:text-brand-100 px-2 text-xs leading-6 font-medium text-white uppercase transition duration-300"
              href="#">
              My MU
            </Link>
            <Separator className="bg-border mx-2" orientation="vertical" />
            <Link
              className="hover:text-brand-100 px-2 text-xs leading-6 font-medium text-white uppercase transition duration-300"
              href="#">
              APPLY NOW
            </Link>
            <Separator className="bg-border mx-2" orientation="vertical" />
            <Link
              className="hover:text-brand-100 px-2 text-xs leading-6 font-medium text-white uppercase transition duration-300"
              href="#">
              ONLINE PAYMENT
            </Link>
          </div>
          <div className="bg-brand-200 relative flex px-4">
            <Link
              className="hover:text-brand-300 px-2 py-2 text-xs leading-6 font-medium text-white uppercase transition duration-300"
              href="/">
              عربي
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-brand-100 container mx-auto flex items-center justify-between !px-0">
        {/* LOGO */}
        <Link
          className="relative block px-4 py-4 pr-[50px] sm:pr-[100px]"
          href="/">
          <div className="absolute inset-0 bg-[#0f4074] [clip-path:polygon(0_0,_100%_0,_80%_100%,_0_100%)]"></div>
          <span className="relative">
            <Image
              src="/images/muscat-university-logo.png"
              width={240}
              height={50}
              alt="Muscat University"
              className="h-auto w-[150px] sm:w-[250px]"
            />
          </span>
        </Link>

        {/* -------------------- DESKTOP MENU -------------------- */}
        <div className="hidden items-center gap-4 pr-4 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navData.map((item, i) => (
                <NavigationMenuItem key={i} className="relative">
                  {/* TOP LEVEL LABEL */}
                  <NavigationMenuTrigger className="hover:text-brand-200 data-[state=open]:hover:text-brand-200 data-[state=open]:text-brand-200 hover:text-brand-200 focus:text-brand-200 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/0 focus-visible:ring-ring/0 cursor-pointer rounded-none bg-transparent text-[16px] font-medium text-white uppercase hover:bg-transparent focus:bg-transparent focus-visible:ring-[0] focus-visible:outline-none data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent">
                    {item.label}
                  </NavigationMenuTrigger>

                  {/* DROPDOWN PANEL */}
                  <NavigationMenuContent className="!rounded-none bg-white shadow-lg">
                    <div
                      className={`grid gap-4 p-4 ${item.label === 'MU Life' || item.label === 'About' ? 'grid-cols-1 lg:w-[700px]' : ''} ${
                        item.submenu.length === 1 &&
                        item.label !== 'MU Life' &&
                        item.label !== 'About'
                          ? 'grid-cols-1 lg:w-[700px]'
                          : ''
                      } ${item.submenu.length === 2 ? 'grid-cols-2 lg:w-[500px]' : ''} ${
                        item.submenu.length >= 3 &&
                        item.label !== 'MU Life' &&
                        item.label !== 'About'
                          ? 'grid-cols-3 lg:w-[700px]'
                          : ''
                      } `}>
                      {item.submenu.map((sub, subIndex) => (
                        <div key={subIndex}>
                          {/* SECTION TITLE */}
                          <h4 className="mb-2 text-lg font-medium text-gray-950">
                            <Link
                              href={sub.href ?? '#'}
                              className="after:bg-brand-300 hover:text-brand-200 relative inline-block pb-2 transition duration-300 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-[60px] after:content-['']">
                              {sub.title}
                            </Link>
                          </h4>

                          {/* INNER LINKS IF AVAILABLE */}
                          {sub.links && (
                            <ul className="flex flex-col">
                              {sub.links.map((lnk, lIndex) => (
                                <li key={lIndex}>
                                  <Link
                                    href={lnk.href}
                                    className="text-brand-100 hover:text-brand-200 block border-b border-[#dbdada] px-2 py-2 transition duration-300">
                                    {lnk.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <div className="[&_div[data-slot='navigation-menu-viewport']]:!rounded-none">
              <NavigationMenuViewport />
            </div>
          </NavigationMenu>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="hover:text-brand-200 cursor-pointer px-3 py-3 outline-none">
              {/* Animated Hamburger (inside div, NOT a component) */}
              <div className="flex h-10 w-10 flex-col items-center justify-center space-y-3">
                <span
                  className={`block h-[1px] w-[45px] bg-white transition-all duration-300 ${open ? 'translate-y-[14px] rotate-45' : ''} `}
                />
                <span
                  className={`block h-[1px] w-[45px] bg-white transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'} `}
                />
                <span
                  className={`block h-[1px] w-[45px] bg-white transition-all duration-300 ${open ? '-translate-y-[14px] -rotate-45' : ''} `}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[275px] rounded-none">
              {mobileMenuData.map((item, idx) =>
                item.submenu ? (
                  <DropdownMenuSub key={idx}>
                    <DropdownMenuSubTrigger className="hover:!bg-brand-100 !rounded-none text-gray-950 transition duration-300 hover:!text-white">
                      {item.label}
                    </DropdownMenuSubTrigger>

                    <DropdownMenuSubContent className="min-w-[275px] !rounded-none">
                      {item.submenu.map((subItem, sIdx) => (
                        <DropdownMenuItem
                          key={sIdx}
                          className="hover:!bg-brand-100 !rounded-none text-gray-950 transition duration-300 hover:!text-white">
                          {subItem}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem
                    key={idx}
                    className="hover:!bg-brand-100 !rounded-none text-gray-950 transition duration-300 hover:!text-white">
                    {item.label}
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* -------------------- MOBILE MENU -------------------- */}
        <Sheet>
          <SheetTrigger className="hover:text-brand-200 mr-2 flex h-[38px] w-[38px] cursor-pointer items-center justify-center text-4xl text-white transition duration-300 lg:hidden">
            <CgMenuMotion />
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] p-4 pt-16">
            <SheetHeader>
              <SheetTitle className="text-brand-100 text-lg">Menu</SheetTitle>
            </SheetHeader>

            <Accordion type="single" collapsible className="mt-4 space-y-2">
              {navData.map((item, index) => (
                <AccordionItem key={index} value={`menu-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-2">
                      {item.submenu.map((sm, smIndex) => (
                        <li key={smIndex}>
                          {/* Main item */}
                          <Link
                            href={sm.href ?? '#'}
                            className="text-brand-100 block font-medium">
                            {sm.title}
                          </Link>

                          {/* Nested submenu only for English Language Centre */}
                          {sm.links && (
                            <ul className="mt-1 ml-4 space-y-1 border-l border-gray-300 pl-3">
                              {sm.links.map((link, j) => (
                                <li key={j}>
                                  <Link
                                    href={link.href}
                                    className="hover:text-brand-100 block text-gray-700">
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
