"use client";

import { Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LINKS = [
  { Icon: Mail,        label: "Email",    value: "pipalpurus@gmail.com",         href: "mailto:pipalpurus@gmail.com" },
  { Icon: LinkedInIcon, label: "LinkedIn", value: "purushottam-kunwar",           href: "https://www.linkedin.com/in/purushottam-kunwar-543032179/" },
  { Icon: GitHubIcon,  label: "GitHub",   value: "purushottam-kunwar",            href: "https://github.com/purushottam-kunwar" },
  { Icon: Phone,       label: "Phone",    value: "+977 9860648598",               href: "tel:+9779860648598" },
];

const AVAILABILITY = [
  "Remote Full-Time Roles",
  "Backend Consulting",
  "Architecture Reviews",
  "Contract Development",
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-sm font-medium text-blue-600 mb-2">Contact</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s build something meaningful.</h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              I&apos;m open to senior backend engineering roles, consulting on distributed systems,
              and interesting architecture problems. Based in Kathmandu, available remotely worldwide.
            </p>

            <div className="space-y-2 mb-8">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-500 group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
                    <link.Icon size={15} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-400 mb-0.5">{link.label}</div>
                    <div className="text-sm text-gray-700 truncate group-hover:text-blue-600 transition-colors">{link.value}</div>
                  </div>
                  <ArrowUpRight size={13} className="shrink-0 text-gray-300 group-hover:text-blue-500 transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={13} />
              <span>Kathmandu, Nepal · UTC+5:45 · Open to remote worldwide</span>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">Available for</h3>
            <ul className="space-y-3 mb-8">
              {AVAILABILITY.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-5 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Resume</p>
              <a
                href="/Purushottam_Kunwar_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
              >
                <Download size={15} /> Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
