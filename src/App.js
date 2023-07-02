import {useMemo, useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    const [posts,setPosts] = useState([
        {id:1,title:'aa',body:'Description'},
        {id:2,title:'Javascript',body:'aaDescription'},
        {id:3,title:'zz',body:'zzDescription'}
    ]);
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery,setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    },[posts,selectedSort])

    const searchedAndSortedPosts = useMemo( () => {
            return sortedPosts.filter((post) => {
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
            })
        }, [searchQuery,sortedPosts]
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
            <PostList posts={sortedPosts} title={'List'} removePost={removePost}/>
        </div>
    );
}

export default App;