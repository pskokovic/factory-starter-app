import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" aria-label="Home" className="home-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-6h4v6" />
        </svg>
      </Link>
      <span className="site-name">Factory Starter App</span>
      <nav aria-label="Main navigation" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a
              href="https://github.com/pskokovic/factory-starter-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
