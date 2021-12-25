import "./App.css";
import { Request } from "./components/Request";

function App() {
  return (
    <div className="App">
      Попробуй:
      <p>https://dpolevodin.github.io/CV_Frontend/</p>
      <p>Данные с сайта:</p>
      <Request />
    </div>
  );
}

export default App;
