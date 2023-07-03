import React, {useMemo, useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";

function App() {
    const [posts,setPosts] = useState([]);
    const [filter,setFilter] = useState({sort:'title',query:''});
    const [modal,setModal] = useState(false);
    const searchedAndSortedPosts = usePosts(posts,filter.sort,filter.query);

    async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

    const createPost = (post) => {
        setPosts([...posts,post])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter((p)=>p.id !== post.id))
    }
    //<hr style={{margin:'15px 0',backgroundColor:'teal',border:'none',height:'1px'}}/>
    return (
        <div className="App">
            <MyButton onClick={fetchPosts}>Get Posts</MyButton>
            <MyButton style={{marginTop:'30px'}} onClick={()=>setModal(true)}>Create Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm  createPost={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={searchedAndSortedPosts} title={'List'} removePost={removePost}/>
        </div>
    );
}

export default App;