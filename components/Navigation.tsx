import Link from "next/link";

export const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
        <Link href="/entities">Entites</Link>
      </li>
    </ul>
  );
};
