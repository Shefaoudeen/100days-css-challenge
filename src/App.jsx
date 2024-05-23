import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Day01 from "./Days/Day01";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day1" element={<Day01 />} />
      </Routes>
    </BrowserRouter>
  );
}
