import React from 'react';

import classes from './Card.module.css';

const card = (props) => {
    return (
        <div className={classes.Card} onClick={props.clicked}>
            {props.value}
        </div>
    );
}

export default card;