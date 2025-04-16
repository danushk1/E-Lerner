import React from 'react';
import {  ChevronDown, Clock, Star } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { useParams } from 'react-router';
import { useGetCoursesByIdQuery } from '@/lib/api';

// npx shadcn@latest add badge

import EnrollmentDialog from '@/components/EnrollmentDialog';
function EnrollCourse() {
  const { id } = useParams();


  const { data: course, isLoading, isError, error } = useGetCoursesByIdQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const monthFee = course.subject?.[0]?.new_price / 3;




  return (
    <div className="pb-20 bg-[#013a42]">

      {/* Top Section */}
      <section className="p-6 md:p-12">
        <div className="w-full max-w-7xl mx-auto relative">

          {/* Pricing Card */}
          <Card className="w-2/7 h-[350px] mx-auto shadow-sm absolute top-6 left-3/4 transform -translate-x-1/2 z-10">
            <div className="h-2/5">
              <img
                src={course.subject?.[0]?.subject_image}
                alt="Laravel Course"
                className="w-full h-full object-cover rounded-t"
              />
            </div>
            <CardContent className="p-4 h-1/2">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-500 text-sm">Price</p>
                <div className="text-sm font-bold text-white bg-black px-2 py-1 rounded">
                  Registration Fee LKR(0)
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                The fastest way to scale {course.subject?.[0]?.subject_name} at this price is:
              </p>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-400 line-through text-sm">LKR {course.subject?.[0]?.old_price}</span>
                <span className="text-lg font-bold text-gray-800">LKR {course.subject?.[0]?.new_price}</span>
              </div>
              <div className="bg-red-50 text-red-600 p-1 rounded text-center text-xs">
                ⏰ You Can  Pay Full fee in *3 Installments of LKR  {monthFee} Per Month
              </div>
            </CardContent>
          </Card>

          {/* Main Course Card */}
          <Card className="w-full shadow-xl pt-12 pb-10 px-8">
            <CardContent className="space-y-6 p-0">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{course.subject?.[0]?.subject_name}</h1>
                <h2 className="text-xl font-semibold text-gray-600">{course.subject?.[0]?.subject_grade}</h2>
              </div>
              <p className="text-gray-600 text-lg w-2/4">
                {course.subject?.[0]?.subject_title} </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <span className="font-medium text-gray-800 mr-2 text-lg">{course.subject?.[0]?.rating}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-gray-500 text-base">({course.subject?.[0]?.rating * 65} ratings)</span>
              </div>

             <EnrollmentDialog course={course} monthFee={monthFee} subjectId={id}/>
             
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Course Details Section */}


      {/* Card 1 — Course Overview */}
      <section className="p-6 md:p-12">
        <Card className="bg-[#013a42] text-white">
          <CardContent className="grid grid-cols-4 gap-4 p-4">
            <div>
              <p className="text-sm text-gray-300">Skill level</p>
              <p className="font-bold">Beginner</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Time to complete</p>
              <p className="font-bold">&lt;10 hour</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Projects</p>
              <p className="font-bold">1</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Prerequisites</p>
              <p className="font-bold">None</p>
            </div>
          </CardContent>
        </Card>
      </section>
      {/* Card 2 — About This Course */}
      <section className="p-6 md:p-12">
        <Card className="bg-[#013a42] text-white">
          <CardHeader>
            <CardTitle>About this course</CardTitle>
          </CardHeader>
          <CardContent className="p-4 text-sm text-gray-300">
            {course.subject?.[0]?.description}
          </CardContent>
        </Card>
      </section>
      {/* Card 3 — What You'll Learn */}
      <section className="p-6 md:p-12">
        <Card className="bg-[#013a42] text-white">
          <CardHeader>
            <CardTitle>What You'll Learn</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-2 text-sm">
            {course.subjectMatter?.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span>✔️</span> <p>{item.matters}</p>
              </div>
            ))}


          </CardContent>
        </Card>
      </section>

      {/* Card 4 — Course Content */}
      <section className="p-6 md:p-12">
        <Card className="bg-white text-black">
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            {course.subjectMainContent?.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border p-3 rounded-md">
                <div className="flex items-center gap-2">
                  <ChevronDown className="w-4 h-4" />
                  <span>{item.main_title}</span>
                </div>
                <div className="flex gap-4 text-xs items-center">
                  <span className="text-gray-500">{`📄 : ${item.count}`}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {item.time}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>


      {/* Instructor Card */}
      <section className="p-6 md:p-12">
        <Card className="bg-[#013a42] text-white">
          <CardHeader>
            <CardTitle>Meet Your Instructor</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="flex items-start gap-4">
              <img src="https://placehold.co/80x80" alt="Instructor" className="rounded-full" />
              <div>
                <p className="font-semibold">Andrew Philips</p>
                <p className="text-xs">Software Engineer | DevOps</p>
                <p className="text-yellow-400 flex items-center gap-1 text-sm"><Star className="w-4 h-4" /> 5.0</p>
                <p className="mt-2 text-xs">
                  Software Engineer with a DevOps focus... (full instructor paragraph).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>



  );
}

export default EnrollCourse;
