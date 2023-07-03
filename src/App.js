import React, {useEffect, useMemo, useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import {PostService} from "./API/PostService";

function App() {
    const [posts,setPosts] = useState([]);
    const [filter,setFilter] = useState({sort:'title',query:''});
    const [modal,setModal] = useState(false);
    const searchedAndSortedPosts = usePosts(posts,filter.sort,filter.query);

    async function fetchPosts() {
        const response = await PostService.getAll()
        setPosts(response.data)
    }
    useEffect(()=>{
        fetchPosts()
    },[])



    // callbacks to add/remove Post
    const createPost = (post) => {
        setPosts([...posts,post])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter((p)=>p.id !== post.id))
    }
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