import { Routes, Route } from "react-router-dom";
import TextPDF from "../pages/pdf/TextPDF";

//test
// import UpTestt from "../pages/upTest/UpTestt";

function RoutesPath() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<TextPDF />} />
      </Routes>
    </>
  );
}

export default RoutesPath;
