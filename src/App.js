import React, {useMemo, useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";

function App() {
    const [posts,setPosts] = useState([
        {id:1,title:'aa',body:'Description'},
        {id:2,title:'Javascript',body:'aaDescription'},
        {id:3,title:'zz',body:'zzDescription'}
    ]);
    const [filter,setFilter] = useState({sort:'title',query:''})
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    },[posts,filter.sort])

    const searchedAndSortedPosts = useMemo( () => {
            return sortedPosts.filter((post) => {
                return post.title.toLowerCase().includes(filter.query.toLowerCase())
            })
        }, [filter.query,sortedPosts]
    )

    const createPost = (post) => {
        setPosts([...posts,post])
    }
    const removePost = (post) => {
        setPosts(posts.filter((p)=>p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm  createPost={createPost}/>
            <hr style={{margin:'15px 0',backgroundColor:'teal',border:'none',height:'1px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={searchedAndSortedPosts} title={'List'} removePost={removePost}/>
        </div>
    );
}

export default App;