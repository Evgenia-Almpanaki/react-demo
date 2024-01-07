import AllTimeTop from "./AllTimeTop";
import "./App.css";
import CurrentTop from "./CurrentTop";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <header className="App-header">
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="currentTop" element={<CurrentTop />} />
                    <Route path="allTimeTop" element={<AllTimeTop />} />
                </Routes>
            </header>
        </BrowserRouter>
    );
}

export default App;
