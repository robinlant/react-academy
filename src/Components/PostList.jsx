import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts,title,removePost}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
                {   posts.length !== 0
                    ?
                    posts.map((post,index) => {
                        return (<CSSTransition
                            key={post.id}
                            timeout={300}
                            classNames="post"
                        >
                            <PostItem index={index+1} post={post} removePost={removePost} />
                        </CSSTransition>)
                    })
                    : <h2 style={{textAlign:"center"}}>Posts are not found</h2>
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;