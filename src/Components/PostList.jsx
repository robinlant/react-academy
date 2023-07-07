import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts,title,removePost}) => {
    if (posts.length === 0) {
        return <div style={{
            background:"orange",
            color:"white",
            fontSize:'40px',
            textAlign:"center",
            margin:'20px 0'
        }}>NO POSTS BEING FOUND AAAAAAAA, UNO ETA LA MESA</div>
    }
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
                {
                    posts.map((post,index) => {
                        return (<CSSTransition
                            key={post.id}
                            timeout={300}
                            classNames="post"
                        >
                            <PostItem index={index+1} post={post} removePost={removePost} />
                        </CSSTransition>)
                    })
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;