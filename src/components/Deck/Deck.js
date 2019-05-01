import React from 'react';

import classes from './Deck.module.css';

const deck = (props) => {
    return (
        <div className={classes.Deck} onClick={props.clicked}>
            {props.children}
        </div>
    );
}

export default deck;