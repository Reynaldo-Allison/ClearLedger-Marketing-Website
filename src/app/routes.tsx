import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { WhyBudgeting } from "./pages/WhyBudgeting";
import { Features } from "./pages/Features";
import { Guide } from "./pages/Guide";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "why-budgeting", Component: WhyBudgeting },
      { path: "features", Component: Features },
      { path: "guide", Component: Guide },
      { path: "*", Component: NotFound },
    ],
  },
]);
