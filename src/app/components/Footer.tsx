import { connection } from "next/server";

export default async function Footer() {
  // Wait for an incoming request so the year is computed per request,
  // never during prerendering or from a cache.
  await connection();

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Factory Starter App. All rights reserved.</p>
    </footer>
  );
}
