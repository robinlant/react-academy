import React, {useEffect, useRef, useState} from "react";
import {PostService} from "../API/PostService";
import MyButton from "../Components/UI/button/MyButton";
import MyModal from "../Components/UI/modal/MyModal";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import PostList from "../Components/PostList";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import Loader from "../Components/UI/loader/Loader";
import Pagination from "../Components/UI/pagination/Pagination";
import {usePagination} from "../hooks/usePagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: 'id', query: ''});
    const [modal, setModal] = useState(false);
    const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPosts, setTotalPosts] = useState(0);
    const [page, setPage] = useState(1);
    const [postLimit, setPostLimit] = useState(10);
    const lastElem = useRef();
    const observer = useRef();
    const [pagesCount, pagesCountArray] = usePagination(totalPosts, postLimit);
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(postLimit, page);
        setPosts([...posts, ...response.data]);
        setTotalPosts(response.headers['x-total-count'])
    });

    useEffect(() => {
        if (lastElem.current) {
            const callback = (entries) => {
                if (entries[0].isIntersecting && !isPostLoading && page < pagesCount) {
                    setPage(page + 1);
                    console.log(`worked! current_page: ${page} posts_length:${posts.length}`)
                }
            };
            observer.current = new IntersectionObserver(callback);
            observer.current.observe(lastElem.current);
        }
        return () => observer.current && observer.current.disconnect();
    }, [isPostLoading, page, pagesCount]);

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const createPost = (post) => {
        setPosts([...posts, post])
        setModal(false)
    };

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Create Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError && <h2>Error happened: {postError}</h2>}
            {isPostLoading && <Loader/>}
            <PostList posts={searchedAndSortedPosts} title={'List'} removePost={removePost}/>
            <div ref={lastElem} style={{height: '20px'}}></div>
            <div className="pagination__wrap">
                {!isPostLoading &&
                    <Pagination page={page} changePage={setPage} pagesCountArray={pagesCountArray}/>
                }
            </div>
        </div>
    );
}

export default Posts;
