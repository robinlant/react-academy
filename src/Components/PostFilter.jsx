import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = () => {
    return (
        <div>
            <div>
                <MyInput placeholder="Search..."
                         value={searchQuery}
                         onChange={e => setSearchQuery(e.target.value)}
                         type="text"/>
                <MySelect defaultValue={'Filter by'}
                          value={selectedSort}
                          onChange={setSelectedSort}
                          options={[
                              {value:'title',name:'By title'},
                              {value: 'body',name: 'By description'}
                          ]}/>
            </div>
        </div>
    );
};

export default PostFilter;