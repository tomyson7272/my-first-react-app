import useThemeStore from "../stores/use-theme";

const Toolbar = () => {
  const themeState = useThemeStore();

  console.log(themeState.theme);

  return (
    <div>
      <button
        onClick={themeState.toggleTheme}
        className="bg-blue-400 rounded p-3 cursor-pointer"
      >
        {" "}
        Toggle Theme
      </button>
    </div>
  );
};

export default Toolbar;
