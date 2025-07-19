import Button from "./ui/Button";
import Navbar from "./features/Navbar/components/Navbar";
import Main from "./features/Main/components/Main";

function App() {
  return (
    <div className="">
      <Button classname="fixed right-5 top-5 bg-amber-400 px-4 py-2 z-10 rounded-full">
        Download CV
      </Button>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
