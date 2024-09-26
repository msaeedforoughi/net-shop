import { IFlex } from "../../../types/flex";

function Flex({ className, children }: IFlex) {
  return <div className={className}>{children}</div>;
}

export default Flex;
