import FooterTop from "./footerTop/FooterTop";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <div className="w-full bg-slate-900 text-gray-300 py-2 px-2 mt-10">
      <FooterTop />

      <FooterBottom />
    </div>
  );
}

export default Footer;
