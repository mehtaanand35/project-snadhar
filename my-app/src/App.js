import { About } from "./Components/About/About";
import { About2 } from "./Components/About2/About2";
import { About3 } from "./Components/About3/About3";
import { Banner } from "./Components/Banner/Banner";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Header1 } from "./Components/Header1/Header1";
import { Header2 } from "./Components/Header2/Header2";
import { Mymap } from "./Components/Map/Map";
import { Middle } from "./Components/Middle-Cont/Middle";
import { Middle2 } from "./Components/Middle2/Middle2";
import { Middle3 } from "./Components/Middle3/Middle3";
import { Middle4 } from "./Components/Middle4/Middle4";

function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <Banner />
      <Middle />
      <Middle2 />
      <Middle3 />
      <Middle4 />
      <About />
      <About2 />
      <About3 />
      <Contact />
      <Mymap />
      <Footer />
    </div>
  );
}

export default App;
