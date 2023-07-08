import React, {useState} from 'react';
import cl from './Pagination.module.css';
import {usePagination} from "../../../hooks/usePagination";

const Pagination = ({page,changePage,pagesCountArray}) => {

    return (
        <div style={{}}>
            {
                pagesCountArray.map((e)=>{
                    return <span className={
                        e !== page
                            ? cl.pagination
                            : [cl.pagination,cl.active].join(' ')
                    } onClick={()=>{changePage(e)}} key={e}>{e}</span>
                })
            }
        </div>
    );
};

export default Pagination;