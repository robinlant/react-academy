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
    ])
    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="Post title"/>
                <MyInput type="text" placeholder="Post description"/>
                <MyButton disabled>Create Post</MyButton>
            </form>
            <PostList posts={posts} title={'List'}/>
        </div>
    );
}

export default App;