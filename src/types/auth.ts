export interface AuthProvider {
  label: string;
  path: string;
}

export interface MetricProps {
  heading: string;
  subheading: string;
}

export interface AuthTabsProps {
  defaultTab?: 'SAAS' | 'SELF_HOSTED';
}

