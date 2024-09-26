export interface IToggleProvider {
  children: React.ReactNode;
}

export interface IToggleContext {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
