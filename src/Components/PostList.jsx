import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,title,removePost}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>

            {   posts.length !== 0
                ?
                posts.map((post,index) =>{
                    return <PostItem index={index+1} post={post} removePost={removePost} key={post.id}/>
                })
                : <h2 style={{textAlign:"center"}}>Posts are not found</h2>
            }
        </div>
    );
};

export default PostList;