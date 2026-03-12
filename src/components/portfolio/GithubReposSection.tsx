import { Github, Star, GitFork, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGithubRepos, GITHUB_USERNAME } from "@/hooks/useGithubRepos";

const TECH_DISPLAY_NAMES: Record<string, string> = {
  java: "Java",
  spring: "Spring",
  "spring-boot": "Spring Boot",
  springboot: "Spring Boot",
  kafka: "Kafka",
  redis: "Redis",
  rabbitmq: "RabbitMQ",
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const GithubReposSection = () => {
  const { data: repos, isLoading, isError } = useGithubRepos();

  return (
    <section id="github-repos" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="floating-shape w-80 h-80 bg-glow-blue -right-40 top-0" />
      <div
        className="floating-shape w-64 h-64 bg-glow-cyan left-0 bottom-0"
        style={{ animationDelay: "-5s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Open Source
          </p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            GitHub Repositories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Repositories using Java, Spring Boot, Spring, Kafka, Redis &amp; RabbitMQ
          </p>
        </div>

        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Fetching repositories...</span>
          </div>
        )}

        {isError && (
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            <AlertCircle className="h-6 w-6 mr-2 text-destructive" />
            <span>Unable to load repositories. Please try again later.</span>
          </div>
        )}

        {repos && repos.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No repositories found with the selected technologies.
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {repos.map((repo) => (
              <div key={repo.id} className="glow-card group p-6 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Github className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-tight truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors ml-2 flex-shrink-0"
                    aria-label={`View ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {repo.description || "No description available."}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.language && (
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics
                    .filter((t) =>
                      Object.keys(TECH_DISPLAY_NAMES).includes(t.toLowerCase())
                    )
                    .map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs font-medium rounded-md bg-secondary/10 text-secondary border border-secondary/20"
                      >
                        {TECH_DISPLAY_NAMES[topic.toLowerCase()] || topic}
                      </span>
                    ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5" />
                      {repo.forks_count}
                    </span>
                  </div>
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              View all on GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
};

export default GithubReposSection;
