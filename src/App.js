import Login from "./pages/LoginPage/Login.jsx";
import {useRoutes} from "react-router-dom";
import Categories from "./pages/Categories";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/HomePage/Home";
import CategoriesDetail from "./pages/CategoriesDetail";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import Search from "./pages/Search";

function App() {
    let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            return navigate("/login");
        }
    },[]);


    const routes = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/categories",
            element: <Categories />
        },
        {
            path: "/categories/:type",
            element: <CategoriesDetail />
        },
        {
            path: "/movie/:id",
            element: <MovieDetail />
        },
        {
            path: "/search/:query",
            element: <Search />
        },
        {
            path: '/login',
            element: <Login />
        },
    ]);

    return (
        <div className="App">
            {routes}
        </div>
    );
}

export default App;
