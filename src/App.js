import Home from "./Home.js"
import Redesign from "./pages/Redesign.js";
import Iterative from "./pages/Iterative.js"
import Personas from "./pages/Personas.js"
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/redesign" element={<Redesign />}/>
          <Route path="/iterative" element={<Iterative />}/>
          <Route path="/personas" element={<Personas />}/>
      </Routes>
    </BrowserRouter>
  )
}