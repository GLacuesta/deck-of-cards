import * as actionTypes from './actionTypes';

export const pickCard = (id) => {
    return {
        type: actionTypes.PICK_CARD,
        cardId: id
    };
};

export const shuffle = (arr) => {
    return {
        type: actionTypes.SHUFFLE,
        deck: arr
    };
};

export const shuffleAll = (cards) => {
    return {
        type: actionTypes.SHUFFLE_ALL,
        cards: cards
    };
};

export const drawCard = (index) => {
    return {
        type: actionTypes.DRAW_CARD,
        index: index
    };
};

