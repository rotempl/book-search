import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import { Provider } from "react-redux";
import { store } from "./store";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  return (
    <Provider store={store}>
      <div style={{ height: "100vh" }}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
