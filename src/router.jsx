import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Product from "./pages/Products/Product";
import Faq from "./pages/Faq/Faq";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);
