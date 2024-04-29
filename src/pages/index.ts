import { lazy } from "react";

export const LoginPage = lazy(() => import("./login"));
export const SignUp = lazy(() => import("./signup"));
export const ProfilePage = lazy(() => import("./profile"));
export const HomePage = lazy(() => import("./home"));
