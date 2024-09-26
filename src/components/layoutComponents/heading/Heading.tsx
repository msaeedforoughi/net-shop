import { IHeading } from "../../../types/heading";

function Heading({ heading, className }: IHeading) {
  return <div className={`font-bold text-3xl ${className}`}>{heading}</div>;
}

export default Heading;
