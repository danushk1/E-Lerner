

import Hero from "@/components/Hero";
import Navigation from "./components/Navigation";
import herroimage from "@/assets/hero/hero_12.jpg";
import CoursesList from "./components/CoursesList";


const App = () => {



  return (
    <div >
        <div className="relative min-h-screen">
     
      <Hero />
        <img
          src={herroimage}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      </div>
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 py-12">
     <CoursesList />
</div>
    </div>


  );
};

export default App;
