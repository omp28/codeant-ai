export interface NavItem {
  icon: React.ReactElement;
  label: string;
  path: string;
}

export interface SampleUser {
  value: string;
  label: string;
}

export interface SidebarProps {
  children: React.ReactNode;
  onUsernameChange: (username: string) => void;
}