import About from "../pages/About";
import Posts from "../pages/Posts";
import PostId from "../pages/PostId";
import Login from "../pages/Login";

export const publicRoutes = [
    {path:'/about',component: About, exact: true},
    {path:'/posts',component: Posts, exact: true},
    {path:'/posts/:id',component: PostId, exact: true}
]
export const privateRoutes = [
    {path:'/login',component: Login, exact: true},

]