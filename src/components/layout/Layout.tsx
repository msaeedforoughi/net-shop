import Navbar from "./navbar/Navbar";
import { ILayout } from "../../types/layout";
import Footer from "./footer/Footer";

function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
