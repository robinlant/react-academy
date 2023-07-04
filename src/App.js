import React, {useEffect, useMemo, useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/modal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import {PostService} from "./API/PostService";
import Loader from "./Components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {usePagination} from "./hooks/usePagination";

function App() {
    const [posts,setPosts] = useState([]); // post list
    const [filter,setFilter] = useState({sort:'title',query:''}); // sort & query filters
    const [modal,setModal] = useState(false); // modal window state
    const searchedAndSortedPosts = usePosts(posts,filter.sort,filter.query); // sorted by filter posts
    const [totalPosts,setTotalPosts] = useState(0); //totalCountOfPosts
    const [pagesCount,pagesCountArray] = usePagination(totalPosts,10);
    const [page,setPage] = useState(1); //on which page is user rn
    const [fetchPosts,isPostLoading,postError] = useFetching(async ()=>{
        const response = await PostService.getAll(10,1);
        setPosts(response.data);
        setTotalPosts(response.headers['x-total-count'])
    })

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
            <MyButton style={{marginTop:'30px'}} onClick={()=>setModal(true)}>Create Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm  createPost={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            { postError&&
                <h2>Error happened: {postError}</h2>
            }
            {isPostLoading
            ? <Loader/>
            : <PostList posts={searchedAndSortedPosts} title={'List'} removePost={removePost}/>
            }
            <div style={{margin:'30px 0',display:"flex",justifyContent:"center"}}>
                {!isPostLoading &&
                    pagesCountArray.map((e)=>{
                        return <MyButton key={e}>{e}</MyButton>
                    })
                }
            </div>
        </div>
    );
}

export default App;