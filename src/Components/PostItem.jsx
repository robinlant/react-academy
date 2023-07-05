import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.index}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={(e)=>{
                        e.preventDefault()
                        //props.readComments()
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