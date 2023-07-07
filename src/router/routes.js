import About from "../pages/About";
import Posts from "../pages/Posts";
import PostId from "../pages/PostId";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";

export const publicRoutes = [
    {path:'/about',component: About, exact: true},
    {path:'/posts',component: Posts, exact: true},
    {path:'/posts/:id',component: PostId, exact: true}
]
export const privateRoutes = [
    {path:'/home',component: HomePage, exact: true},
    {path:'/login',component: Login, exact: true}
]