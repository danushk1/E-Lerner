

import Hero from "@/components/Hero";
import Navigation from "./components/Navigation";
import herroimage from "@/assets/hero/hero3.png";


const App = () => {



  return (
    <div>
    <Hero />
    <div className="relative min-h-screen"></div>
  
      <img
          src={herroimage}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
 
    </div>
  );
};

export default App;
