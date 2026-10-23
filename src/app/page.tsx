export default function Home() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Factory Starter App</h1>
        <p className="hero-description">
          A starter app built with Next.js and TypeScript. Clone it, run it,
          and start building your next idea.
        </p>
        <a
          className="button"
          href="https://github.com/pskokovic/factory-starter-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </section>
      <section id="features" className="features">
        <h2>What&apos;s inside</h2>
        <ul>
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>ESLint</li>
        </ul>
      </section>
    </main>
  );
}
