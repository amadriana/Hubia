import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Services } from "./pages/services";
import { HowItWorks } from "./pages/how-it-works";
import { SuccessCases } from "./pages/success-cases";
import { Pricing } from "./pages/pricing";
import { Contact } from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: Services },
      { path: "como-funciona", Component: HowItWorks },
      { path: "casos-de-exito", Component: SuccessCases },
      { path: "precios", Component: Pricing },
      { path: "contacto", Component: Contact },
    ],
  },
]);
