import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import demoIcon from '@/assets/icon/demo.png';

export default function Hero() {

  const handleSearch = (e) => {
    e.preventDefault();

  };

  return (
    <div className="pt-36">
      {/* Hero Content */}
<div className="relative z-10 flex flex-col  text-white justify-center px-8 pt-72">



        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-xl bg-black/10 backdrop-blur-md h-14 lg:h-16 rounded-full p-2 flex items-center mx-24"        >
          <Input
            type="text"
            placeholder="Search your course..."
            className="flex-grow  bg-transparent lg:text-lg  text-white placeholder:text-white/50 border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0"
          />
          <Button
            type="submit"
            className="rounded-full w-48 flex items-center gap-x-2 lg:h-12 bg-cyan-950 text-white"
          >
            <Sparkles
              style={{ width: "20px", height: "20px" }}
              className=" mr-2 animate-pulse text-sky-400"
            />
            <span className="lg:text-lg">AI Search</span>
          </Button>
        </form>
      </div >
      <div className="relative flex flex-col text-white justify-center px-10 pt-2.5 mx-24">
        <div className="flex gap-4">
          <Button className="bg-cyan-950 text-white rounded-full w-40 h-15">Get Started</Button>
          <Button className="flex items-center justify-center gap-2 border-4 border-cyan-950 rounded-full px-12 h-10 bg-white text-cyan-950">
            Watch Demo
            <img src={demoIcon} alt="Demo" className="w-5 h-5" />
          </Button>
        </div>
      </div>
      

    </div>
  );
}
