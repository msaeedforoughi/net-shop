import Heading from "../../layoutComponents/heading/Heading";
import { Link } from "react-router-dom";
import Button from "../../layoutComponents/button/Button";

function JournalContent() {
  return (
    <div>
      {" "}
      <div className="bg-white md:h-[300px] md:w-[600px] h-[430px] w-[330px] p-8 mt-32 rounded-md shadow-md">
        <Heading heading="Journals" />
        <p className="mt-12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ea
          at ipsam sunt facilis veniam qui eveniet quo saepe consequatur? Earum
          praesentium non eos perferendis, optio iusto deleniti reprehenderit
          placeat!
        </p>
        <Link to="/store">
          <Button
            variant="primary"
            className="h-[40px] w-[140px] mt-14 text-[14px]"
          >
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default JournalContent;
