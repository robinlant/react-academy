import {useState} from "react";
import './styles/app.css';
import PostList from "./Components/PostList";

function App() {
    const [posts,setPosts] = useState([
        {id:1,title:'Javascript',body:'Description'},
        {id:2,title:'Javascript',body:'Description'},
        {id:3,title:'Javascript',body:'Description'}
    ])
    return (
        <div className="App">
            <PostList posts={posts} title={'List'}/>
            <PostList posts={posts} title={'List'}/>
            <PostList posts={posts} title={'List'}/>
        </div>
    );
}

export default App;