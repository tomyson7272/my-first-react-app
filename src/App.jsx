import "./App.css";
import Counter from "./components/Counter";
import SignUpForm from "./components/SignUpForm";
import Toolbar from "./components/Toolbar";
import { useTheme } from "./providers/ThemeProvider";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className={theme === "light" ? "bg-white" : "bg-gray-300"}>
        {/* <Toolbar />
        <SignUpForm /> */}
        <Counter />
      </div>
    </>
  );
}

export default App;
