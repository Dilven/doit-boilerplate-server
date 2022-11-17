import { useThemeContext } from "@/styles/theme";

export const ThemeToggler = () => {
  const { colorMode, setColorMode } = useThemeContext();
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
