import Link from "next/link";
export const metadata = {
  title: "about us",
  description: "this is about us page",
};

export default function AboutLayout({ children }) {
  return (
    <main>
      <nav>
        <ul className="flex gap-12">
          <li>
            <Link href="/about/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </main>
  );
}
