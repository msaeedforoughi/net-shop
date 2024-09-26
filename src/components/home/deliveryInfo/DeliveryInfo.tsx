import Container from "../../layoutComponents/container/Container";
import { Styles } from "../../../helpers/deliveryInfo";
import Flex from "../../layoutComponents/flex/Flex";
import { deliveryOptions } from "../../../constants/deliveryOptions";

function DeliveryInfo() {
  return (
    <Container>
      <div className="md:h-10 h-16 md:w-full md:mt-[20px] mt-[20px] px-4">
        <Flex className="flex flex-col items-center md:flex-row justify-between">
          {deliveryOptions.map((option) => (
            <div key={option.text} className={Styles}>
              {option.text}
            </div>
          ))}
        </Flex>
      </div>
    </Container>
  );
}

export default DeliveryInfo;
