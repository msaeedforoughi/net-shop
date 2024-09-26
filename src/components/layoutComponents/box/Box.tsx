import { IBox } from "../../../types/box";

function Box({ children, className }: IBox) {
  return <div className={className}>{children}</div>;
}

export default Box;
