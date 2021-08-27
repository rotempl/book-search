import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
