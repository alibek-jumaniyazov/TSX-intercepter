import { HomePage, LoginPage, ProfilePage, SignUp } from "../pages";
import { TRoutes } from "../types/routes";


export const routes: TRoutes = {
    public: [
        {
            id: 1,
            path: "/",
            element: < HomePage/>,
            fallback: <h1>Loading...</h1>,
        },
        {
            id:2,
            path:"/login", 
            element:<LoginPage/>,
            fallback: <h1>Loading...</h1>
        },
        {
            id:3,
            path:"/sign-up", 
            element:<SignUp/>,
            fallback: <h1>Loading...</h1>
        }
    ],
    private: [
        {
            id: 1,
            path: "/profile",
            element: < ProfilePage/>,
            roles: [],
        },
    ],
};
