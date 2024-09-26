import { TVariant, TButton } from "../../../types/button";

function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button
      {...rest}
      style={{
        borderRadius: "6px",
        padding: "4px 8px",
        ...style,
        ...checkVariant(variant),
      }}
    >
      {children}
    </button>
  );
}

export default Button;

function checkVariant(variant?: TVariant) {
  switch (variant) {
    case "primary":
      return { backgroundColor: "blue", color: "white" };
    case "secondary":
      return { backgroundColor: "gray", color: "black" };
    case "danger":
      return { backgroundColor: "red", color: "white" };
    case "success":
      return { backgroundColor: "green", color: "white" };
    case "warning":
      return { backgroundColor: "yellow", color: "black" };
  }
}
