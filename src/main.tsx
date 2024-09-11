import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PersonalDetails from "./assignments/pages/personal-details";
import EcommerceSorting from "./assignments/EcommerceSorting";
import Address from "./assignments/pages/address";
import PaymentDetails from "./assignments/pages/payment-details";
import MutlistepForm from "./assignments/MutlistepForm";
import Summary from "./assignments/pages/summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MutlistepForm />,
    children: [
      {
        path:"/",
        element:<PersonalDetails/>,
      },
      {
        path: "/address-details",
        element: <Address />,
      },
      {
        path: "/payment-details",
        element: <PaymentDetails />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ],
  },
  {
    path: "/2",
    element: <EcommerceSorting />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
