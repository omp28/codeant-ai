export interface Repository {
  id: number;
  name: string;
  visibility: string;
  language: string;
  size: number;
  updated_at: string;
  html_url: string;
}

export interface HomeProps {
  username: string;
}
