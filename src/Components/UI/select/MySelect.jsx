import React from 'react';
import classes from './MySelect.module.css';

const MySelect = ({options,defaultValue,value,onChange}) => {
    return (
        <select className={classes.mySel}
                onChange={(onChange)}
                value={value}
        >
            <option value="" disabled>{defaultValue}</option>
            {options.map((option, index) =>
                <option
                    value={option.value} key={index+1}>{option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;