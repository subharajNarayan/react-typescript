import { lazy } from "react";

const Login = lazy(() => import("../core/Public/Login/Login"));


const appRoutes: CustomRoute[] =[
  {
    path: "/login",
    component: Login,
    type: "login"
  }
]

export default appRoutes;