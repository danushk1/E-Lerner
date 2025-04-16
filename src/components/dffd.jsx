// components/EnrollmentDialog.jsx

import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import bankDetails from "@/assets/enroll/bankDetails.jpg";
import { toast } from 'sonner';
import { useEnrollCourseMutation } from '@/lib/api';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    name: z.string().min(1, { message: "name is required" }),
})

const EnrollmentDialog = ({ course, monthFee }) => {



    const [enrollCourse, { isLoading }] = useEnrollCourseMutation();

    const form = useForm({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (value) => {

        console.log(value)

    }
    /**   const [enrollCourse, { isLoading: isEnrollLoading}] = useEnrollCourseMutation();
      const handleClassClick = () => {
        const toastId = toast.loading("Enrolling...");
        try{
          
          // enrollCourse({
          //   fulName: fullname,
          //   userId: 1,
          //   phone: phone,
          //   courseId: course.subject?.[0]?.id,
          //   fullPayment: true,
          //   monthlyInstallment: true,
          //   firststInstallment: true,
          //   secondndinstallment: true,
          //   therdndinstallment: true,
          //   date: date,
          //   paymeentSlip: paymentSlip
      
          // }).unwrap()
          toast.dismiss(toastId);
          toast.success("Enrollment Successful")
         
    }catch(error){
      toast.dismiss(toastId);
      toast.error("Something went wrong");
    }
     
      } */









    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-cyan-950 text-white rounded-full w-40 h-10">
                            Enroll Now
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="lg:max-w-2xl mt-10 mb-10 max-h-[110vh] overflow-y-auto">
                        <DialogHeader>
                            <DialogTitle className="text-center text-cyan-900 border-bold">
                                Enrollment Form
                            </DialogTitle>
                        </DialogHeader>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input placeholder="Full Name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <DialogFooter className="w-full mb-20">
                                    <div className="w-full flex flex-col space-y-6">
                                        <Button type="submit" className="w-full">
                                            Submit Enrollment
                                        </Button>
                                    </div>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>

            </form>
        </Form>
    );
};

export default EnrollmentDialog;




// components/EnrollmentDialog.jsx

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import bankDetails from "@/assets/enroll/bankDetails.jpg";
import { toast } from 'sonner';
import { useEnrollCourseMutation } from '@/lib/api';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

const formSchema = z.object({
   name: z.string().min(1,{message: "Please enter your name"}),
})

const EnrollmentDialog = ({ course, monthFee }) => {



  const [enrollCourse, { isLoading }] = useEnrollCourseMutation();

const form = useForm({
resolver: zodResolver(formSchema),
})

const handleSubmit = (value) => {

console.log(value)

}
/**   const [enrollCourse, { isLoading: isEnrollLoading}] = useEnrollCourseMutation();
  const handleClassClick = () => {
    const toastId = toast.loading("Enrolling...");
    try{
      
      // enrollCourse({
      //   fulName: fullname,
      //   userId: 1,
      //   phone: phone,
      //   courseId: course.subject?.[0]?.id,
      //   fullPayment: true,
      //   monthlyInstallment: true,
      //   firststInstallment: true,
      //   secondndinstallment: true,
      //   therdndinstallment: true,
      //   date: date,
      //   paymeentSlip: paymentSlip
  
      // }).unwrap()
      toast.dismiss(toastId);
      toast.success("Enrollment Successful")
     
}catch(error){
  toast.dismiss(toastId);
  toast.error("Something went wrong");
}
 
  } */









  return (
    <Form {...form}>
<form onSubmit={form.handleSubmit(handleSubmit)}>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-cyan-950 text-white rounded-full w-40 h-10">
          Enroll Now
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-2xl mt-10 mb-10 max-h-[110vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-cyan-900 border-bold">
            Enrollment Form
          </DialogTitle>
        </DialogHeader>

       
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
<FormControl>
              <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormDescription>
               Enter your full name
              </FormDescription>
              <FormMessage />
</FormItem>
            )}
          />
           
              <Input placeholder="Mobile Number" required />
            </div>

            <div className="space-y-2 mt-2">
              <h2 className="text-teal-900 text-lg font-semibold mb-2">Course Enrollment Details</h2>
              <p className="mb-4">🎓 Course: {course.subject?.[0]?.subject_name}</p>

              <RadioGroup defaultValue="full">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="payment-full" value="full" />
                  <label htmlFor="payment-full">
                    Full Payment - <span className="text-gray-400 text-sm">LKR {course.subject?.[0]?.new_price}</span>
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="payment-installment" value="installment" />
                  <label htmlFor="payment-installment">
                    Monthly Installment - <span className="text-gray-400 text-sm">LKR {monthFee}</span>
                  </label>
                </div>
              </RadioGroup>

              <div className="flex flex-wrap space-x-4 pl-6 mt-3">
                <RadioGroup>
                  <label htmlFor="installment-1" className="flex items-center space-x-2">
                    <RadioGroupItem id="installment-1" value="1st" />
                    1st
                  </label>
                  <label htmlFor="installment-2" className="flex items-center space-x-2">
                    <RadioGroupItem id="installment-2" value="2nd" />
                    2nd
                  </label>
                  <label htmlFor="installment-3" className="flex items-center space-x-2">
                    <RadioGroupItem id="installment-3" value="3rd" />
                    3rd
                  </label>
                  <Input type="date" />
                </RadioGroup>
              </div>
            </div>

            <div>
              <Label>Upload Bank Payment Slip (PDF, JPG, PNG)</Label>
              <Input
                type="file"
                accept=".pdf, .jpg, .png"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </div>

            <Label className="flex items-center gap-2">
              <Checkbox required /> I hereby declare that the information provided is true and correct.
            </Label>
          </div>

          <DialogFooter className="w-full mb-20">
            <div className="w-full flex flex-col space-y-6">
              <Button type="submit" className="w-full">
                Submit Enrollment
              </Button>
              <div className="border-t pt-6 text-center w-full mt-6">
                <img src={bankDetails} alt="Bank Details" className="w-full h-auto" />
              </div>
            </div>
          </DialogFooter>
      
      </DialogContent>
    </Dialog>
    </form>
    </Form> 
  );
};

export default EnrollmentDialog;
