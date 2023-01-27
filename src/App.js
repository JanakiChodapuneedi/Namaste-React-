import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Applayout/>,
    errorElement : <Error/>,
    children : [
      {
      path : '/',
      element : <Body/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path:'/restaurant/:resId',
        element : <RestaurantMenu/>
      }
    ]
  }  
])
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
//root.render(<Applayout />);
root.render(<RouterProvider router={appRouter}/>);