import { useQuery } from "@tanstack/react-query";

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export const GITHUB_USERNAME = "utsavverma-dev";

const TARGET_TECHS = [
  "java",
  "spring",
  "spring-boot",
  "springboot",
  "kafka",
  "redis",
  "rabbitmq",
];

const fetchGithubRepos = async (): Promise<GithubRepo[]> => {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    { headers }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const repos: GithubRepo[] = await response.json();

  return repos.filter((repo) => {
    const language = (repo.language || "").toLowerCase();
    const topics = repo.topics.map((t) => t.toLowerCase());

    return (
      TARGET_TECHS.includes(language) ||
      topics.some((topic) => TARGET_TECHS.includes(topic))
    );
  });
};

export const useGithubRepos = () => {
  return useQuery({
    queryKey: ["github-repos"],
    queryFn: fetchGithubRepos,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
