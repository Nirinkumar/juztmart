import { BrowserRouter, Routes, Route } from "react-router-dom"
import Accessories from "./categoryPages/Accessories";
import Cosmetics from "./categoryPages/Cosmetics";
import Electronics from "./categoryPages/Electronics";
import Furniture from "./categoryPages/Furniture";
import Mobiles from "./categoryPages/Mobiles";
import Toys from "./categoryPages/Toys";
import Fashion from "./fashion/Fashion";
import Home from "./home/Home"
import Navbar from "./navbar/Navbar";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Collection from "./pages/Collection";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/accessories" element={ <Accessories /> } />
        <Route path="/fashion" element={ <Fashion /> } />
        <Route path="/mobiles" element={ <Mobiles /> } />
        <Route path="/electronics" element={ <Electronics /> } />
        <Route path="/cosmetics" element={ <Cosmetics /> } />
        <Route path="/furniture" element={ <Furniture /> } />
        <Route path="/toys" element={ <Toys /> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/search" element={ <Collection /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


// npx json-server --watch data/homeData.json --port 3001 --static ./data