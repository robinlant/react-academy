import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({createPost}) => {
    const [post,setPost] = useState({title:'',body:''})

    const addPost = () => {
        const newPost = {
            id:Date.now(),
            title:post.title,
            body:post.body}
        createPost(newPost)
        setPost({title: '',body:''})
    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(e) => {setPost({...post,title:e.target.value})}}
                type="text" placeholder="Post title"/>
            <MyInput
                value={post.body}
                onChange={(e) => {setPost({...post,body:e.target.value})}}
                type="text" placeholder="Post description"/>
            <MyButton onClick={(e)=> {
                e.preventDefault();
                addPost()
            }}>Create Post</MyButton>
        </form>
    );
};

export default PostForm;