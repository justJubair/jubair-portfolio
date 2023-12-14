import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
};
export default Root;
