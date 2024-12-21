import { Repository } from '../types/repository';

export class GitHubService {
  private static BASE_URL = 'https://api.github.com';

  static async getUserRepositories(username: string): Promise<Repository[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/users/${username}/repos`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data as Repository[];
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }

  static async getRepository(username: string, repoName: string): Promise<Repository> {
    try {
      const response = await fetch(`${this.BASE_URL}/repos/${username}/${repoName}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data as Repository;
    } catch (error) {
      console.error('Error fetching repository:', error);
      throw error;
    }
  }
}
