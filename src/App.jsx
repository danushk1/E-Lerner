import { Button } from "@/components/ui/button";
import Greeting from "./Greeting";
import { Switch } from "@/components/ui/switch"
import Navigation from "./components/Navigation";


const App = () => {
  const name = "Lerner";
  const age = 24;

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
<Navigation/>
      <h1 className="text-red-500 text-2xl">Hello, world!</h1>
      <Greeting name={"Lerner"} age={24} />
      <Button onClick={handleClick}>Click Me</Button>
      <Switch />
    </div>
  );
};

export default App;
