import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import MainPage from "./container/MainPage/MainPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MainPage />
            </div>
        </BrowserRouter>
    );
}

export default App;
