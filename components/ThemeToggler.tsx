import { useThemeContext } from "@/styles/theme";

export const ThemeToggler = () => {
  const { colorMode, setColorMode } = useThemeContext();
  console.log(
    "🚀 ~ file: ThemeToggler.tsx ~ line 5 ~ ThemeToggler ~ colorMode",
    colorMode
  );
  return (
    <label>
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={(ev) => {
          setColorMode(ev.target.checked ? "dark" : "light");
        }}
      />{" "}
      Dark
    </label>
  );
};
