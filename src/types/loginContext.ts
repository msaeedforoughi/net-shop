export interface ILoginProvider {
  children: React.ReactNode;
}

export interface ILoginContext {
  isLogin: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
}
