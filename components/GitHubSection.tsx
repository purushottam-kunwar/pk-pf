"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  PHP: "#4F5D95",
  CSS: "#563d7c",
  Groovy: "#e69f56",
  Shell: "#89e051",
  Java: "#b07219",
  HTML: "#e34c26",
};

function relTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const d = Math.floor(diff / 86400000);
  if (d < 1) return "today";
  if (d < 7) return `${d}d ago`;
  if (d < 30) return `${Math.floor(d / 7)}w ago`;
  if (d < 365) return `${Math.floor(d / 30)}mo ago`;
  return `${Math.floor(d / 365)}y ago`;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const BASE = "https://api.github.com/users/purushottam-kunwar";
    Promise.all([
      fetch(BASE).then((r) => r.json()),
      fetch(`${BASE}/repos?sort=updated&per_page=6`).then((r) => r.json()),
    ])
      .then(([u, r]) => {
        if (u.login) setUser(u);
        if (Array.isArray(r)) {
          setRepos(r.filter((repo: Repo) => !repo.name.includes(".github")));
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="py-24 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-label mb-4">
            <span className="gold-line" />
            GitHub
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="text-[clamp(2.5rem,5vw,4rem)] font-light text-[#ede8df] leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            >
              Code I write
              <br />
              <span className="text-[#c9a96e] italic">when I&apos;m not at work.</span>
            </h2>
            <a
              href="https://github.com/purushottam-kunwar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#9a948c] hover:text-[#ede8df] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] px-4 py-2 transition-all mb-2"
              style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.75rem" }}
            >
              <GithubIcon size={14} />
              @purushottam-kunwar
            </a>
          </div>

          {user && (
            <div className="flex flex-wrap gap-6 mt-6">
              {[
                { value: user.public_repos, label: "Public Repos" },
                { value: user.followers, label: "Followers" },
                { value: user.following, label: "Following" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span
                    className="text-xl text-[#c9a96e]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[#524f4a] text-xs ml-1.5"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-40 bg-[#111] border border-[rgba(255,255,255,0.05)] animate-pulse"
              />
            ))}
          </div>
        )}

        {error && (
          <div
            className="text-[#524f4a] text-sm border border-[rgba(255,255,255,0.06)] p-6"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Could not reach GitHub API (rate limit or network). View profile directly →{" "}
            <a
              href="https://github.com/purushottam-kunwar"
              className="text-[#c9a96e] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/purushottam-kunwar
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col p-5 bg-[#0d0d0d] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(201,169,110,0.25)] hover:bg-[#111] transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-[#ede8df] text-sm group-hover:text-[#c9a96e] transition-colors font-medium"
                    style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.8rem" }}
                  >
                    {repo.name}
                  </span>
                  <ExternalLink
                    size={12}
                    className="shrink-0 text-[#3a3a3a] group-hover:text-[#c9a96e] transition-colors mt-0.5"
                  />
                </div>

                <p
                  className="text-[#524f4a] text-xs leading-relaxed flex-1 mb-4"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {repo.description || "No description provided."}
                </p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.7rem" }}>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: LANG_COLORS[repo.language] || "#888" }}
                        />
                        <span className="text-[#524f4a]">{repo.language}</span>
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 text-[#524f4a]" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.7rem" }}>
                        <Star size={10} />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1 text-[#524f4a]" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.7rem" }}>
                        <GitFork size={10} />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                  <span
                    className="text-[#3a3a3a] text-xs"
                    style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem" }}
                  >
                    {relTime(repo.updated_at)}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
