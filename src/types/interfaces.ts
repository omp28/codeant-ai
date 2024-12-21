export interface User {
  username: string;
  displayName: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  onUsernameChange: (username: string) => void;
}
