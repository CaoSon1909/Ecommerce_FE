import React from 'react';
import About from "./About";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import NotFound from "./NotFound";
import Categories from "./Categories";
import History from "../components/History";
import Product from "../components/Product";
import Products from "../components/Products";
import ProductsContainer from "../containers/ProductsContainer";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";

const routes = [
    {
        path: "/(|dashboard)",
        exact: true,
        main: () => <Dashboard/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About/>
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/signup',
        exact: false,
        main: () => <Signup/>
    },
    {
        path: '/categories',
        exact: false,
        main: () => <Categories/>
    },
    {
        path: '/history',
        exact: false,
        main: () => <History/>
    },
    {
        path: '/admin',
        exact: true,
        main: () => <AdminPage/>
    },
    {
        path: '/user',
        exact: true,
        main: () => <UserPage/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    },

];

export default routes;
