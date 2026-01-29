'use client'

import { FiSearch } from 'react-icons/fi'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'

import { Button } from '@/components/ui/button'

const schema = z.object({
  degree: z.string().min(1, 'Select a degree'),
  name: z.string().min(1, 'Enter a name'),
  keyword: z.string().min(1, 'Enter a keyword'),
})

export default function FacultyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      degree: '',
      name: '',
      keyword: '',
    },
  })

  function onSubmit(values: any) {
    console.log(values)
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-[1fr_1fr_1fr_50px] gap-4 lg:gap-8">
          <div>
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-normal text-white">
                    Degree
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <SelectTrigger className="min-h-[50px] w-full rounded-none border-0 border-b-1 border-b-white text-xl font-normal text-white focus:ring-0 focus-visible:ring-0 data-[placeholder]:text-[#88bffa]">
                        <SelectValue placeholder="Select degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="mtech">M.Tech</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-normal text-white">
                    Faculty Name
                  </FormLabel>
                  <FormControl className="min-h-[50px] w-full rounded-none border-0 border-b-1 border-b-white !text-xl font-normal text-white placeholder:text-[#88bffa] focus:ring-0 focus-visible:ring-0">
                    <Input placeholder="Enter Name to search" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="keyword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-normal text-white">
                    Enter Keyword
                  </FormLabel>
                  <FormControl className="min-h-[50px] w-full rounded-none border-0 border-b-1 border-b-white !text-xl font-normal text-white placeholder:text-[#88bffa] focus:ring-0 focus-visible:ring-0">
                    <Input placeholder="Type keyword to search" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="self-end">
            <Button
              type="submit"
              className="bg-brand-200 hover:bg-brand-300 h-[50px] w-[50px] rounded-full transition duration-300">
              <FiSearch />
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
