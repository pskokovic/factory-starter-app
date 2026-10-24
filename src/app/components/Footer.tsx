import { cacheLife } from "next/cache";

export default async function Footer() {
  "use cache";
  // Revalidate hourly so the year rolls over soon after New Year.
  cacheLife("hours");

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Factory Starter App. All rights reserved.</p>
    </footer>
  );
}
