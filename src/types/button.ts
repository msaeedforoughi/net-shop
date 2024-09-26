import { ComponentProps } from "react";

export type TVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success";

export type TButton = ComponentProps<"button"> & { variant?: TVariant };
