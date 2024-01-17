// import NavBar from '../../components/navber/NavBar';
import { useState } from 'react';
import PdfViewer from '../../components/preview/PdfViewer';
import { PDF } from '../../configs/pdf-index';

// import React from "react";

function HomePage() {
  const [openModalPdfCoop, setOpenModalPdfCoop] = useState(false);

  return (
    <div className="bg-white flex flex-row w-full h-screen flex-wrap">
      <PdfViewer pdfUrl={PDF.pdfCoop} openModal={openModalPdfCoop} setOpenModal={setOpenModalPdfCoop} />
    </div>
  );
}

export default HomePage;
