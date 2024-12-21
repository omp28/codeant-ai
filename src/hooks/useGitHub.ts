import { useState, useCallback } from 'react';
import { Repository } from '../types/repository';
import { GitHubService } from '../services/github';

interface UseGitHubReturn {
  repositories: Repository[] | null;
  loading: boolean;
  error: Error | null;
  fetchRepositories: (username: string) => Promise<void>;
}

export const useGitHub = (): UseGitHubReturn => {
  const [repositories, setRepositories] = useState<Repository[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchRepositories = useCallback(async (username: string) => {
    setLoading(true);
    setError(null);
    try {
      const repos = await GitHubService.getUserRepositories(username);
      setRepositories(repos);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  }, []);

  return { repositories, loading, error, fetchRepositories };
};