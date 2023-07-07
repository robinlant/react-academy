import About from "../pages/About";
import Posts from "../pages/Posts";
import PostId from "../pages/PostId";

export const routes = [
    {path:'/about',component: About, exact: true},
    {path:'/posts',component: Posts, exact: true},
    {path:'/posts/:id',component: PostId, exact: true}
]