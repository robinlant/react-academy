import {useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    const [posts,setPosts] = useState([
        {id:1,title:'Javascript',body:'Description'},
        {id:2,title:'Javascript',body:'Description'},
        {id:3,title:'Javascript',body:'Description'}
    ]);
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');

    const addNewPost = () => {
        console.log('worked')
        const newPost = {id:Date.now(),title:title,body:body}
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                    type="text" placeholder="Post title"/>
                <MyInput
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                    type="text" placeholder="Post description"/>
                <MyButton onClick={(e)=> {
                    e.preventDefault();
                    addNewPost()
                }}>Create Post</MyButton>
            </form>
            <PostList posts={posts} title={'List'}/>
        </div>
    );
}

export default App;