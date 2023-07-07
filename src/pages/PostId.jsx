import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import Loader from "../Components/UI/loader/Loader";
import {PostService} from "../API/PostService";
import {findAllByDisplayValue} from "@testing-library/react";

const PostId = () => {
    const params = useParams()
    const [post,setPost] = useState()
    const [comments,setComments] = useState()
    const [fetchPost,isLoading,error] = useFetching(async ()=>{
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, commentsError]  = useFetching(async ()=>{
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })

    useEffect(()=>{
        fetchPost()
        fetchComments()
    },[params.id])
    return (
        <div>
            {isLoading &&
                <Loader/>
            }
            {!isLoading && post &&
                <div>
                    <h2>id: {post.id} <br/>
                        title: {post.title}</h2>
                </div>
            }
            {comments &&
                <div style={{color:"darkblue",marginTop:"30px"}}>
                    <h3>Comments List</h3>
                    {comments.map((elem)=>(
                        <div key={elem.id}>
                            <div>{elem.email}</div>
                            <div>{elem.body}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default PostId;