import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ height: "100%" }}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
