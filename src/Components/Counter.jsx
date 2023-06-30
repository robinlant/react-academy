import React, {useState} from 'react';

const Counter = () => {
    const [likes,setLikes] = useState(0);

    function increment() {
        setLikes(likes + 1)
    }
    function decrement() {
        if(likes > 0) setLikes(likes - 1)
    }
    return (
        <div>
            <h2>Likes: {likes}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;