import { IGrid } from "../../../types/grid";

function Grid({ children, className }: IGrid) {
  return <div className={className}>{children}</div>;
}

export default Grid;
