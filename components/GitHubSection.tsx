"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LANG_DOT: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Python:     "bg-blue-400",
  PHP:        "bg-indigo-400",
  CSS:        "bg-purple-600",
  Groovy:     "bg-orange-400",
  Shell:      "bg-green-400",
  Java:       "bg-orange-600",
  HTML:       "bg-red-400",
};

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
}

function relTime(iso: string) {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (d < 1)  return "today";
  if (d < 7)  return `${d}d ago`;
  if (d < 30) return `${Math.floor(d / 7)}w ago`;
  if (d < 365) return `${Math.floor(d / 30)}mo ago`;
  return `${Math.floor(d / 365)}y ago`;
}

export default function GitHubSection() {
  const [repos, setRepos]     = useState<Repo[]>([]);
  const [user, setUser]       = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    const BASE = "https://api.github.com/users/purushottam-kunwar";
    Promise.all([
      fetch(BASE).then((r) => r.json()),
      fetch(`${BASE}/repos?sort=updated&per_page=6`).then((r) => r.json()),
    ])
      .then(([u, r]) => {
        if (u.login) setUser(u);
        if (Array.isArray(r)) setRepos(r.filter((repo: Repo) => !repo.name.includes(".github")));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-sm font-medium text-blue-600 mb-2">Open Source</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">GitHub repositories</h2>
              {user && (
                <p className="text-sm text-gray-400">{user.public_repos} public repos · {user.followers} followers</p>
              )}
            </div>
            <a
              href="https://github.com/purushottam-kunwar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 text-gray-600 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors shrink-0"
            >
              <GithubIcon size={14} />
              @purushottam-kunwar
            </a>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-36 bg-gray-100 rounded-xl animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <div className="text-sm text-gray-500 border border-gray-200 rounded-xl p-6">
            Could not reach GitHub API.{" "}
            <a href="https://github.com/purushottam-kunwar" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              View profile directly →
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-5 bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {repo.name}
                  </span>
                  <ExternalLink size={12} className="shrink-0 text-gray-300 group-hover:text-blue-400 transition-colors mt-0.5" />
                </div>

                <p className="text-xs text-gray-400 leading-relaxed flex-1 mb-4">
                  {repo.description ?? "No description provided."}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <span className={`w-2 h-2 rounded-full ${LANG_DOT[repo.language] ?? "bg-gray-400"}`} />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Star size={10} /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <GitFork size={10} /> {repo.forks_count}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-300">{relTime(repo.updated_at)}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
