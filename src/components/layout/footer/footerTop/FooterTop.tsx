import SubscribeSection from "./SubscribeSection";
import { sections } from "../../../../constants/footerListItems";

function FooterTop() {
  return (
    <div className="max-w-[1240px] md:mx-auto mx-4 grid md:grid-cols-6 grid-cols-2 border-b-2 border-gray-600 py-8">
      {sections.map((section, index) => (
        <div key={index}>
          <h6 className="font-bold uppercase pt-2 md:mx-0 mx-12">
            {section.title}
          </h6>
          <ul>
            {section.items.map((item, i) => (
              <li
                key={i}
                className="py-1 text-gray-500 hover:text-white cursor-pointer md:mx-0 mx-12"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <SubscribeSection />
    </div>
  );
}

export default FooterTop;
