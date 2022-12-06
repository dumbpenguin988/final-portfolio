import Home from "./Home.js"
import Redesign from "./pages/Redesign.js";
import Iterative from "./pages/Iterative.js"
import Personas from "./pages/Personas.js"
import { HashRouter, Routes, Route} from "react-router-dom";

export default function App(){
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/redesign" element={<Redesign />}/>
          <Route path="/iterative" element={<Iterative />}/>
          <Route path="/personas" element={<Personas />}/>
      </Routes>
    </HashRouter>
  )
}