import React, { Component, lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { check_token } from "../Redux/authSlice.js";
import ResponsiveAppBar from "../SharedModules/Header/Header.jsx";
import Footer from "../SharedModules/Footer/Footer.jsx";

const Home = lazy(() => import("../Components/Home/Home.jsx"));
const Registration = lazy(() =>
  import("../Components/Registration/Registration.jsx")
);
const Login = lazy(() => import("../Components/Login/Login.jsx"));
const Profile = lazy(() => import("../Components/Profile/Profile.jsx"));
const AddProducts = lazy(() =>
  import("../Components/Products/AddProducts.jsx")
);
const ShowProduct = lazy(() =>
  import("../Components/Products/ShowProduct.jsx")
);
const EditProduct = lazy(() =>
  import("../Components/Products/EditProduct.jsx")
);
const Products = lazy(()=>import("../Components/Products/Products.jsx"))

export default function NewRouter() {
  const dispatch = useDispatch();

  const PublicRouteNames = [
    {
      path: "/signup",
      Component: <Registration />,
    },
    {
      path: "/login",
      Component: <Login />,
    },
  ];

  const PrivateRouteNames = [
    {
      path: "/home",
      Component: <Home />,
    },
    {
      path: "/userdetails",
      Component: <Profile />,
    },
    {
      path: "/addProducts",
      Component: <AddProducts />,
    },
    {
      path: "/showproduct",
      Component: <ShowProduct />,
    },

    {
      path: "/edit/:id",
      Component: <EditProduct />,
    },
    {
      path:'/products',
      Component:<Products />,
    }
  ];

  useEffect(() => {
    dispatch(check_token());
  }, [dispatch]);

  function PrivateRoute({ children }) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          {PublicRouteNames.map((route, index) => (
            <Route key={index} path={route.path} element={route.Component} />
          ))}
          {PrivateRouteNames.map((route, index) => (
            <Route
              key={index + PublicRouteNames.length}
              path={route.path}
              element={<PrivateRoute>{route.Component}</PrivateRoute>}
            />
          ))}
          <Route path="/" element={<Navigate to="/home" />} />{" "}
          {/* Default route */}
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}
