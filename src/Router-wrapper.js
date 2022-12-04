import App from "./App.js"
import Redesign from "./Redesign.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function RouterWrapper(){
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<App />}/>
          <Route path="/redesign" element={<Redesign />}/>
        </Routes>
      </Router>
    </div>
  )
}