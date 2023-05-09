import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Showcase,
  Policy,
  Newsletter,
  Contacts,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="z-0 bg-primary">
        <div className="relative bg-primary">
          <Navbar />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative justify-center items-center mb-[10em] max-w-[1900px]">
            <Showcase />
          </div>{" "}
          <div className="w-full relative z-0 bg-primary max-w-[1900px] flex flex-col justify-center items-center">
            <Policy />
            <Newsletter />
            <Contacts />
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
