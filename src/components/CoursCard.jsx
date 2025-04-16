import { Link } from "react-router"
import { MapPin, Star } from "lucide-react";
import { Button } from "./ui/button";
function CourseCard(props) {
  return (
    <div
                  key={course.subject_id}
                  className="w-full max-w-md bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={course.subject_image}
                      alt={course.subject_name}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-semibold text-xl text-gray-800 mb-2 line-clamp-2">
                      {course.subject_name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="line-clamp-1">{course.subject_type}</span>
                    </div>
                    <div className="flex items-center space-x-1 mb-4">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium text-gray-700">{course.rating}</span>
                      <span className="text-gray-500"> reviews</span>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xl font-bold text-black">
                          LKR {course.new_price}
                        </span>
                        <span className="text-gray-400 line-through">LKR {course.old_price}</span>
                      </div>
                    </div>
                  </div>
                </div>
)

}

export default CourseCard