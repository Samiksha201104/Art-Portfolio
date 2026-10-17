
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import MyWorks from "./MyWorks";
import Nav from "./Nav";
import AudioManager from "./components/AudioManager";

function App() {
  return (
    <HashRouter>
      <AudioManager />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<MyWorks />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
