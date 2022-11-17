import Link from "next/link";

import { ThemeToggler } from "../ThemeToggler";
import { List } from "./styles";

export const Navigation = () => {
  return (
    <>
      <ThemeToggler />
      <List>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/entities">Entites</Link>
        </li>
      </List>
    </>
  );
};
