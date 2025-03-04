import { BrowserRouter, Routes, Route } from "react-router-dom";
import AutoSearch from "./components/AutoSearch";
import Home from "./components/Home";
import Pagination from "./components/Pagination";
import OtpInput from "./components/OtpInput";
import BasicForm from "./components/BasicForm/BasicForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auto-search" element={<AutoSearch />}></Route>
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/otp-input" element={<OtpInput />}></Route>
        <Route path="/basic-form" element={<BasicForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
