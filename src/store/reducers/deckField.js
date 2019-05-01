import * as actionTypes from '../actions/actionTypes';
import { updateObject, shuffle } from '../../shared/utility';
import * as config from '../../shared/config'; 

const initialState = {
    deck: [
        ...config.deck
    ],
    pickedCards: [],
    drawnCards: [],
    isShuffled: false
}

const pickCard = (state, action) => {
    // const updatedDeck = state.deck.filter((item) => item.id !== action.id);
    // const pickedCard = state.deck.filter((item) => item.id === action.id);
    // return updateObject(state, {
    //     deck: [ ...updatedDeck ],
    //     pickedCards: [ ...pickedCard ]
    // });
};

const shuffleDeck = (state, action) => {
    const deck = [ ...action.deck ];
    const shuffledDeck = shuffle(deck);
    return updateObject(state, {
        deck: [ ...shuffledDeck ],
        isShuffled: true
    });
};

const shuffleAll = (state, action) => {
    const drawnCards = [ ...action.cards ];
    const deck = state.deck.concat(drawnCards);
    const shuffledDeck = shuffle(deck);
    return updateObject(state, {
        deck: [ ...shuffledDeck ],
        drawnCards: [],
        isShuffled: true
    });
};

const drawCard = (state, action) => {
    const deck = [ ...state.deck ];
    const drawnCard = deck[action.index];
    const updatedDeck = deck.filter((item) => item.id !== drawnCard.id);
    const drawnCards = [ ...state.drawnCards ];
    drawnCards.push(drawnCard);
    return updateObject(state, {
        deck: [ ...updatedDeck ],
        drawnCards: [ ...drawnCards ]
    });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        //case actionTypes.PICK_CARD: return pickCard(state, action);
        case actionTypes.SHUFFLE: return shuffleDeck(state, action);
        case actionTypes.SHUFFLE_ALL: return shuffleAll(state, action);
        case actionTypes.DRAW_CARD: return drawCard(state, action);
        default: return state;
    }
}

export default reducer;