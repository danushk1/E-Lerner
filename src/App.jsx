import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"
import Navigation from "./components/Navigation";


const App = () => {


  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
     <Navigation/>
      
      <Button onClick={handleClick}>Click Me</Button>
      <Switch />
    </div>
  );
};

export default App;
