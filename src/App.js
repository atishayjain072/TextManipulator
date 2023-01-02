import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextBox heading="Enter the Text to Analyse below" />
      </div>
    </>
  );
}

export default App;
