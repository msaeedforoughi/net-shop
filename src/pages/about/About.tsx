import Container from "../../components/layoutComponents/container/Container";
import Button from "../../components/layoutComponents/button/Button";
import { Link } from "react-router-dom";
import Heading from "../../components/layoutComponents/heading/Heading";
import Flex from "../../components/layoutComponents/flex/Flex";

function About() {
  return (
    <Container>
      <Flex className="flex justify-center items-center flex-row bg-gray-100 h-[680px] md:px-0 px-4">
        <div className="bg-white h-[400px] w-[600px] p-8 rounded-md shadow-md ">
          <Heading heading="About us" />
          <p className="mt-12">
            net-shop is a Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Similique ea at ipsam sunt facilis veniam qui eveniet quo
            saepe consequatur? Earum praesentium non eos perferendis, optio
            iusto deleniti reprehenderit placeat!
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
      </Flex>
    </Container>
  );
}

export default About;
