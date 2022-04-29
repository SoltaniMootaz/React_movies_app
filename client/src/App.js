import "./Styles/App.css";
import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Pages/Movies";
import Bookmarks from "./Pages/Bookmarks";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/Login" element={<LoginForm />}></Route>
                    <Route exact path="/Signup" element={<SignupForm />}></Route>
                    <Route exact path="/Home" element={<Home />}></Route>
                    <Route exact path="/Movies" element={<Movies />}></Route>
                    <Route exact path="/Bookmarks" element={<Bookmarks />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
