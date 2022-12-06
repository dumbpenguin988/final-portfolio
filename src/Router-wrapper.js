import App from "./App.js"
import Redesign from "./pages/Redesign.js";
import Iterative from "./pages/Iterative.js"
import Personas from "./pages/Personas.js"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function RouterWrapper(){
  return (
    <div>
      <Router>

        <Routes>
          <Route index element={<App />}/>
          <Route path="/redesign" element={<Redesign />}/>
          <Route path="/iterative" element={<Iterative />}/>
          <Route path="/personas" element={<Personas />}/>
        </Routes>
      </Router>
    </div>
  )
}