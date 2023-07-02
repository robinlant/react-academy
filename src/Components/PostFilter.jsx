import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <div>
                <MyInput placeholder="Search..."
                         value={filter.query}
                         onChange={e => setFilter({...filter, query:e.target.value})}
                         type="text"/>
                <MySelect defaultValue={'Filter by'}
                          value={filter.sort}
                          onChange={e => setFilter({...filter, sort:e.target.value})}
                          options={[
                              {value:'title',name:'By title'},
                              {value: 'body',name: 'By description'}
                          ]}/>
            </div>
        </div>
    );
};

export default PostFilter;