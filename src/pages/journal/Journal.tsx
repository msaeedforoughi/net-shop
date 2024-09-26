import Container from "../../components/layoutComponents/container/Container";
import Flex from "../../components/layoutComponents/flex/Flex";
import JournalCardList from "../../components/journal/journalCardList/JournalCardList";
import JournalContent from "../../components/journal/journalContent/JournalContent";

function Journal() {
  return (
    <Container>
      <Flex className="flex flex-col justify-center items-center bg-gray-100 h-full md:px-0 px-4">
        <JournalContent />

        <JournalCardList />
      </Flex>
    </Container>
  );
}

export default Journal;
