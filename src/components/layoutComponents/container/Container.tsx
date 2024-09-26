import { IContainer } from "../../../types/container";

function Container({ children }: IContainer) {
  return <div className="container mx-auto">{children}</div>;
}
export default Container;
