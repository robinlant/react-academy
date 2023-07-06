import React from 'react';
import {useParams} from "react-router-dom";

const PostId = () => {
    const params = useParams()
    return (
        <div>
            Welcome to post {params.id} page!
        </div>
    );
};

export default PostId;