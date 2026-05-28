import { Routes, Route } from "react-router-dom";

import Home from "./landing_page/home/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>

      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;