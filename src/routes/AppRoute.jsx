import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import { ContactMe, Home, Portfolio } from "@/pages";
import { About } from "@/pages";
import { Testimonial } from "@/pages";



export default function AppRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/aboutme",
          element: <About/>,
        },
        {
          path: "/testimonials",
          element: <Testimonial/>,
        },
        {
          path: "/portfolio",
          element: <Portfolio/>,
        },
        {
          path: "/contactme",
          element: <ContactMe/>,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}