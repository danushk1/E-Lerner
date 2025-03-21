import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Notificationimg from "@/assets/icon/notification.png";

function Navigation(p) {

  return (
    <nav className="z-10 bg-stone-100 flex  items-center justify-between px-8 text-green-900 py-4">
      <div className="flex items-center space-x-8">
        <a href="/" className="text-2xl font-bold ">
          E-LERNER
        </a>
        <div className="hidden md:flex space-x-6">
          <a href={`/`} className="transition-colors">
            Home
          </a>
        </div> <div className="hidden md:flex space-x-6">
          <a href={`/`} className="transition-colors">
            Project
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href={`/`} className="transition-colors">
            About us
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" >
          <Globe className="h-5 w-5 mr-2" />
          EN
        </Button>
        <Button  asChild className="bg-green-900 text-white rounded-full w-24 h-10">
          <a href="/sign-in">LogIn</a>
        </Button>
        <Button asChild variant="ghost" className="border-4 border-green-900 rounded-full w-24 h-10">
          <a href="/sign-up">Sign In</a>
        </Button>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-stone-100" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
       
        <img className="w-8 h-8 rounded-full" src={Notificationimg} alt="user photo"/>
      </button>   
  
  </div>
      </div>
    </nav>
  );
}

export default Navigation;