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
import { Navigate } from "react-router";
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
import PaymentSuccess from '@/components/paymentsuccess';
import { useUser } from '@clerk/clerk-react';


const MAX_FILE_SIZE = 10 * 1024 * 1024;
const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  phone: z.string().min(1, { message: "Please enter your phone" }),
  paymentType: z.string().min(1, { message: "Please select your payment type" }),
  firstTInstallment: z.string().optional(),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Please select a valid date",
  }),
  slip: z
    .string()
    .refine((val) => {
      // Approximate base64 size check
      const base64Length = val.length - (val.indexOf(',') + 1);
      const padding = (val.endsWith("==") ? 2 : val.endsWith("=") ? 1 : 0);
      const fileSizeInBytes = (base64Length * 3) / 4 - padding;
      return fileSizeInBytes <= MAX_FILE_SIZE;
    }, {
      message: "File size should not exceed 10MB",
    }),
})

const EnrollmentDialog = ({ course, monthFee, subjectId }) => {
  const [open, setOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const convertFileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });


  const [enrollCourse, { isLoading }] = useEnrollCourseMutation();
  const { isLoaded, isSignedIn, user } = useUser();
  const form = useForm({
    resolver: zodResolver(formSchema),
  })

  const handleSubmit = async (value) => {
    console.log(value)

    const { name, phone, paymentType, firstTInstallment, slip, date } = value;
    try {

      await enrollCourse({
        userId: user.id,
        phone,
        subject_Id: subjectId,
        paymentType,
        firstTInstallment,
        slip,
        date,
        name,

      }).unwrap()

      toast.success("Enrollment Successful")

      setPaymentSuccess(true);
    } catch (error) {

      toast.error("Something went wrong");
    }

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



  if (!isLoaded) return null;



  if (paymentSuccess) return <PaymentSuccess />;

  return (

    <Dialog open={open} onOpenChange={setOpen}>
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
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">

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
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Mobile Number"{...field} />

                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2 mt-2">
                <h2 className="text-teal-900 text-lg font-semibold mb-2">Course Enrollment Details</h2>
                <p className="mb-4">🎓 Course: {course.subject?.[0]?.subject_name}</p>
                <FormField
                  control={form.control}
                  name="paymentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-2">
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <div className="flex flex-wrap space-x-4 pl-6 mt-3">

                  <FormField
                    control={form.control}
                    name="firstTInstallment"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup onValueChange={(val) => {
                            if (val === field.value) {
                              field.onChange(""); // Deselect if clicked again
                            } else {
                              field.onChange(val); // Select new value
                            }
                          }}>
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
                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input type="date" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </RadioGroup>

                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <Label>Upload Bank Payment Slip (PDF, JPG, PNG)</Label>
                <FormField
                  control={form.control}
                  name="slip"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="file"
                          accept=".pdf, .jpg, .png"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const base64 = await convertFileToBase64(file);
                              field.onChange(base64);
                            }
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>

              <Label className="flex items-center gap-2">
                <Checkbox required /> I hereby declare that the information provided is true and correct.
              </Label>
            </div>

            <DialogFooter className="w-full mb-20">
              <div className="w-full flex flex-col space-y-6">
                <Button type="submit" className="w-full" disabled={isLoading}
                  onClick={() => {
                    if (!isSignedIn) {
                      window.location.href = "/sign-in"; // Redirect to Clerk sign-in page
                    } else {
                      form.handleSubmit(handleSubmit)();
                    }
                  }}>
                  {isLoading ? "Submitting..." : "Submit Enrollment"}
                </Button>
                <div className="border-t pt-6 text-center w-full mt-6">
                  <img src={bankDetails} alt="Bank Details" className="w-full h-auto" />
                </div>
              </div>
            </DialogFooter>

          </form>
        </Form>
      </DialogContent>
    </Dialog>

  );
};

export default EnrollmentDialog;
