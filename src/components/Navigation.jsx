import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Notificationimg from "@/assets/icon/notification.png";
import { Link } from "react-router";
import { useEffect,useState  } from "react";

function Navigation() {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default is 'English'






  return (
    <nav className="z-10 bg-stone-100 flex  items-center justify-between px-8 text-green-900 py-4">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold ">
          E-LERNER
        </Link>
</div>
<div className="hidden md:flex space-x-6">
        <div className="hidden md:flex space-x-6">
          <Link to={`/home`} className="transition-colors">
            Home
          </Link>
        </div> <div className="hidden md:flex space-x-6">
          <Link to={`/`} className="transition-colors">
            Project
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to={`/`} className="transition-colors">
            About us
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" >
          <Globe className="h-5 w-5 mr-2" />
          {/* <div className="flex items-center space-x-4">
           
            <select
              className="p-2 border border-gray-300 rounded"
              value={selectedLanguage}
              
            >
              <option value="en">English</option>
              
            </select>
          </div> */}
        </Button>
        <Button  asChild className="bg-green-900 text-white rounded-full w-24 h-10">
          <Link to="/sign-in">LogIn</Link>
        </Button>
        <Button asChild variant="ghost" className="border-4 border-green-900 rounded-full w-24 h-10">
          <Link to="/sign-up">Sign In</Link>
        </Button>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="flex text-sm bg-stone-100" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
       
        <img className="w-8 h-8 rounded-full" src={Notificationimg} alt="user photo"/>
      </button>   
  
  </div>
      </div>
      <div id="google_translate_element" className="hidden"></div>
    </nav>
  );
}

export default Navigation;