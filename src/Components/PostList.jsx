import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,title,removePost}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            {posts.map((post,index) =>
                <PostItem index={index+1} post={post} removePost={removePost} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;