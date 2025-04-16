import { MapPin, Star } from "lucide-react";
import { Button } from "./ui/button";
import { getCourses } from "@/lib/api/courses";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/lib/features/userSlice";
import { useGetAllSubjectQuery } from "@/lib/api.js";
import { Link } from "react-router";

export default function ProjectList() {
  // const dispatch = useDispatch();
  // const userSlice = useSelector((state) => state.user);

//page lording and data lording
  // const [courses, setCourses] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");

//---- or ----
const {data: courses, isLoading,isError, error} = useGetAllSubjectQuery();
//page lording and data lording end


  const [sclClass, setSclClass] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null); // Initially null for no filtering
  const [selectedClass, setSelectedClass] = useState(null); // Initially null for no filtering
  const sclLevel = ["Scholorship", "Ordinary Level", "Advanced Level"];

// page lording and data lording
  // useEffect(() => {
  //   setIsLoading(true);
  //   getCourses()
  //     .then((data) => {
  //       setCourses(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

//---- or ----



  // page lording and data lording end


  // Handle sclLevel button click
  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setSelectedClass("ALL"); // Set "ALL" as default when level is clicked
    switch (level) {
      case "Scholorship":
        setSclClass(["ALL", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"]);
        break;
      case "Ordinary Level":
        setSclClass(["ALL", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"]);
        break;
      case "Advanced Level":
        setSclClass(["ALL", "Physics", "Maths", "Art"]);
        break;
      default:
        setSclClass([]);
    }
  };

  // Handle sclClass button click
  const handleClassClick = (className) => {
    setSelectedClass(className);
  };

  // Filter courses based on selectedLevel and selectedClass
  const filteredCourses = courses?.filter((course) => {
    // If no level is selected, show all courses
    if (!selectedLevel) return true;

    // Filter by level
    const matchesLevel = course.subject_type === selectedLevel;

    // If no class is selected or "ALL" is selected, return courses matching the level
    if (!selectedClass || selectedClass === "ALL") return matchesLevel;

    // Filter by both level and class
    return matchesLevel && course.subject_grade === selectedClass;
  });

  return (
    <div>
      <section className="px-4 py-8 lg:py-16 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Featured Courses
          </h1>
          {/* <p>{userSlice.user.name}</p>
          <Button
            onClick={() => {
              dispatch(setUser({ name: "spun" }));
            }}
          >
            Click me
          </Button> */}
          <p className="text-lg bg-gradient-to-r from-green-900 to-red-600 text-transparent bg-clip-text">
            "Find The Perfect Course For Your Path To Professional Development Start Here"
          </p>
        </div>

        {/* Level Filter Buttons */}
        <div className="flex flex-wrap items-center gap-4 justify-center mb-12 px-4">
          {sclLevel.map((loc, index) => (
            <button
              className={`text-base  border-green-900 border-2 border-solid rounded-full px-4 py-2 text-center min-w-24  transition-colors ${
                selectedLevel === loc ? "bg-cyan-950 text-white" : ""
              }`}
              key={index}
              onClick={() => handleLevelClick(loc)}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Class Filter Buttons */}
        <div className="flex flex-wrap items-center gap-4 justify-center mb-12 px-4">
          {sclClass.map((loc, index) => (
            <button
              className={`text-base  border-green-900 border-2 border-solid rounded-full px-4 py-2 text-center min-w-24  transition-colors ${
                selectedClass === loc ? "bg-cyan-950 text-white" : ""
              }`}
              key={index}
              onClick={() => handleClassClick(loc)}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Card Grid */}
        <div className="w-full px-4">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {filteredCourses.map((course) => (
                <Link to={`/courses/${course.subject_id}`}
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}