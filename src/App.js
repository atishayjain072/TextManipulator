import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
        <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
                <TextBox
                  showAlert={showAlert}
                  heading="Enter the Text to Analyse below"
                  mode={mode}
                />
        </div>
    </>
  );
}

export default App;
