import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from "react-router-dom";

const PostItem = (props) => {
    const router = useHistory()
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.index}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <MyButton style={{marginRight:'3px'}} onClick={(e)=>{
                        e.preventDefault()
                        router.push(`/posts/${props.post.id}`)
                    }}>
                        Comments
                    </MyButton>
                    <MyButton onClick={(e)=>{
                        e.preventDefault()
                        props.removePost(props.post)
                    }}>Delete</MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;