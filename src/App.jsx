import "./App.css";
import HomePage from "./Pages/HomePage";
import WatchPage from "./Pages/WatchPage";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/" element={<MainContent />} />
              <Route path="watch" element={<WatchPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
