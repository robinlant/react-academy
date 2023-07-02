import {useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";

function App() {
    const [posts,setPosts] = useState([
        {id:1,title:'aa',body:'Description'},
        {id:2,title:'Javascript',body:'aaDescription'},
        {id:3,title:'zz',body:'zzDescription'}
    ]);
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (post) => {
        setPosts([...posts,post])
    }
    const removePost = (post) => {
        setPosts(posts.filter((p)=>p.id !== post.id))
    }
    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm  createPost={createPost}/>
            <hr style={{margin:'15px 0',backgroundColor:'teal',border:'none',height:'1px'}}/>
            <MySelect defaultValue={'Filter by'}
                      value={selectedSort}
                      onChange={sortPosts}
                      options={[
                          {value:'title',name:'By title'},
                          {value: 'body',name: 'By description'}
                      ]}/>
            {posts.length !== 0
                ? <PostList posts={posts} title={'List'} removePost={removePost}/>
                : <h2 style={{textAlign:"center"}}>Posts are not found</h2>
            }
        </div>
    );
}

export default App;