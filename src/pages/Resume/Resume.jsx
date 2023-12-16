import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../../assets/JubairAhmedResume.pdf";
import AltNavbar from "../../components/Navbar/AltNavbar";

const Resume = () => {
  const pdfUrlViewer = resume;

  const handleDownloadResume = () => {
    // Specify the URL of the PDF file you want to download
    const pdfUrl = resume;

    // Create a link element
    const link = document.createElement("a");

    // Set the href attribute to the PDF file URL
    link.href = pdfUrl;

    // Set the download attribute to suggest the name for the downloaded file
    link.download = "Jubair Ahmed's Resume.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document after the download
    document.body.removeChild(link);
  };


  return (
    <div className="bg-[#1a1a1a] pb-10">
      {/* navbar */}
      <AltNavbar/>
      {/* Resume download button */}
      <div className="flex justify-center text-white">
      <button onClick={handleDownloadResume} className="btn duration-300 mt-16 bg-gradient-to-r from-[#617bce] to-[#43aeba] border-none text-white font-bold hover:scale-105"> 
      <MdOutlineFileDownload size={25}/>DOWNLOAD RESUME</button>
      </div>
      {/* pdf viewer */}
      <div className="mt-8 bg-[#1a1a1a]">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer theme="dark" defaultScale={1.3}  fileUrl={pdfUrlViewer} />;
        </Worker>
      </div>

       {/* Resume download button */}
       <div className="flex justify-center text-white mt-2">
      <button onClick={handleDownloadResume} className="btn duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] border-none text-white font-bold hover:scale-105"> 
      <MdOutlineFileDownload size={25}/>DOWNLOAD RESUME</button>
      </div>
    </div>
  );
};
export default Resume;
