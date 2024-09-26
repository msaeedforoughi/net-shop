import JournalCard from "../journalCard/JournalCard";
import { journalCards } from "../../../constants/journalcards";

function journalCardList() {
  return (
    <div className="mb-12">
      {" "}
      {journalCards.map((card, index) => (
        <JournalCard
          key={index}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default journalCardList;
