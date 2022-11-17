import Link from "next/link";

import { List } from "./styles";

export const Navigation = () => {
  return (
    <List>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/entities">Entites</Link>
      </li>
    </List>
  );
};
