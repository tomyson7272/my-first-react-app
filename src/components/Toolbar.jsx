import { useTheme } from "../providers/ThemeProvider";

const Toolbar = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="bg-blue-400 rounded p-3 cursor-pointer"
      >
        {" "}
        Toggle Theme
      </button>
    </div>
  );
};

export default Toolbar;
