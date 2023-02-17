import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
//import Instamart from "./components/Instamart";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./Utils/userContext";
import store from "./Utils/store";
import { Provider } from "react-redux";

const Instamart = lazy(() => import("./components/Instamart"));

const Applayout = () => {
  const [user, setUser] = useState({
     name: "Janaki", email: "namaste@gmail.com" ,
  });
  return (
    <Provider store={store}>
    <UserContext.Provider value={{user:user, setUser:setUser}} >
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
            <Cart />
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
//root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
