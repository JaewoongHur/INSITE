import LoginPage from "@pages/login/LoginPage";
import MainPage from "@pages/main/MainPage";
import UserPage from "@pages/user/UserPage";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routePath: RouteObject[] = [
  {
    id: "main-page",
    path: "",
    element: <MainPage />,
  },
  {
    id: "muser-page",
    path: "/login",
    element: <LoginPage />,
  },
];

const router = createBrowserRouter(routePath);

export default router;
