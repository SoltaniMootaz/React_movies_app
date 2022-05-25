import "./Styles/App.css";
import React, { useCallback, useEffect } from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Movies from "./Pages/Movies";
import Bookmarks from "./Pages/Bookmarks";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import PrivateRoute from "./Private routing/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import load_movies from "./Actions/movies";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/Login" replace />} />
                    <Route path="/FILM" component={home}></Route>
                    
                    <Route exact path="/Login" element={<LoginForm />}></Route>
                    <Route exact path="/Signup" element={<SignupForm />}></Route>
                    <Route
                        exact
                        path="/Home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact
                        path="/Movies"
                        element={
                            <PrivateRoute>
                                <Movies />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact
                        path="/Bookmarks"
                        element={
                            <PrivateRoute>
                                <Bookmarks />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
