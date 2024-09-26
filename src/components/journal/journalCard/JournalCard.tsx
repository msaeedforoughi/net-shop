import { Link } from "react-router-dom";
import { IJournalCard } from "../../../types/journalCard";

const JournalCard = ({ title, description, link }: IJournalCard) => {
  return (
    <div
      className={`bg-white p-8 mt-12 rounded-md shadow-md ${
        link
          ? "xl:h-[200px] xl:w-[1200px] lg:h-[230px] lg:w-[930px] md:h-[230px] md:w-[600px] h-[330px] w-[330px]"
          : ""
      }`}
    >
      {link ? (
        <Link to={link}>
          <h1 className="font-bold text-3xl">{title}</h1>
        </Link>
      ) : (
        <h1 className="font-bold text-3xl">{title}</h1>
      )}
      <p className="mt-8">{description}</p>
    </div>
  );
};

export default JournalCard;
