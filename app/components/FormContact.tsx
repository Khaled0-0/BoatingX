"use client"

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "./ui/button"
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "./ui/form"
import { Input } from "./ui/Input"
import { SelectableDropdown } from "./ui/SelectableDropdown"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
   title: z.string().min(1, { message: "Please select a title." }),
   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
   email: z.string().email({ message: "Please enter a valid email address." }).min(1, { message: "Email is required." }),
   phoneNumber: z.string().min(1, { message: "Phone Number is required." }),
   preferredContact: z.string().min(1, { message: "Preferred Contact is required." }),
   description: z.string().min(1, { message: "Description is required." }),
})

export function FormContact() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         title: "",
         name: "",
         email: "",
         phoneNumber: "",
         preferredContact: "",
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values)
   }

   // Options for the title dropdown
   const titleOptions = [
      { label: 'Mr', value: 'mr' },
      { label: 'Ms', value: 'ms' },
   ];

   const titleOptions2 = [
      { label: 'Phone', value: 'phone' },
      { label: 'Email', value: 'email' },
      { label: 'Any', value: 'any' },
   ];

   return (
      <Form {...form}>

         <header className='flex flex-col items-center gap-3'>
            <h2 className='text-[#0F1A2B] text-center  text-5xl font-normal'>
               Contact Us
            </h2>
            <p className='text-center text-[#6C757D] text-lg font-normal'>
               Using the form below to contact our team directly
            </p>
         </header>

         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10 mb-40 ">

            <div className="grid grid-cols-2 gap-5">
               {/* Title */}
               <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                           <SelectableDropdown
                              label=""
                              placeholder="Title"
                              value={field.value}
                              onChange={field.onChange}
                              options={titleOptions}
                              className="w-full flex justify-between items-center 
                              focus-visible:ring-gray-100 focus-visible:ring-2 focus-visible:rounded-[0px] "
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               {/* User Name */}
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                           <Input className="w-full" placeholder="Username" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            {/* Email */}
            <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Email</FormLabel>
                     <FormControl>
                        <Input className="w-full" placeholder="Email" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            {/* Phone Number + Preferred Contact */}
            <div className="grid grid-cols-2 gap-5">

               <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                           <PhoneInput
                              country={'us'}
                              value={field.value}
                              onChange={(phone) => field.onChange(phone)}
                              inputClass="!w-full !h-10 !text-sm !rounded-none"
                              buttonClass="!bg-[#6C757D1A] !rounded-none"
                              containerClass="!w-full !h-10 !text-sm !rounded-none"
                              inputProps={{
                                 name: 'phoneNumber',
                                 required: false,
                                 autoFocus: false,
                              }}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="preferredContact"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Preferred Contact</FormLabel>
                        <FormControl>
                           <div>
                              <SelectableDropdown
                                 label=""
                                 placeholder="Any"
                                 value={(field.value as string | undefined) ?? ''}
                                 onChange={field.onChange}
                                 options={titleOptions2}
                                 className="w-full flex justify-between items-center 
                              focus-visible:ring-gray-100 focus-visible:ring-2 focus-visible:rounded-[0px] "
                              />
                           </div>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            {/* Textarea */}
            <FormField
               control={form.control}
               name="description"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Description</FormLabel>
                     <FormControl>
                        <Textarea className="w-full h-30" placeholder="Description" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button type="submit" className="w-full h-15 rounded-none bg-[#C7AB17] text-white text-xl font-bold cursor-pointer hover:bg-[#C7AB17]/80 ">Submit</Button>
         </form>
      </Form>
   )
}