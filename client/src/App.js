import logo from "./logo.svg";
import "./Styles/App.css";
import React from "react";
import Appbar from "./Components/Appbar";
import Indeximg from "./Components/Indeximg";
import Homesection from "./Components/Homesection";
function App() {
    return (
        <div className="App">
            <Appbar />
            <Indeximg />
            <Homesection />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
