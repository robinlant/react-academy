import {useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";

function App() {
    const [posts,setPosts] = useState([
        {id:1,title:'Javascript',body:'Description'},
        {id:2,title:'Javascript',body:'Description'},
        {id:3,title:'Javascript',body:'Description'}
    ]);
    const createPost = (post) => {
        setPosts([...posts,post])
    }
    const removePost = (post) => {
        setPosts(posts.filter((p)=>p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm  createPost={createPost}/>
            <hr style={{margin:'15px 0'}}/>
            <MySelect defaultValue={'Filter by'} options={}/>
            {posts.length !== 0
                ? <PostList posts={posts} title={'List'} removePost={removePost}/>
                : <h2 style={{textAlign:"center"}}>Posts are not found</h2>
            }
        </div>
    );
}

export default App;