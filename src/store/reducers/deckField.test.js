import reducer from './deckField';
import * as actionTypes from '../actions/actionTypes';
import { shuffle } from '../../shared/utility';
import * as config from '../../shared/config'; 


describe('deck reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            deck: [
                ...config.deck
            ],
            pickedCards: [],
            drawnCards: [],
            isShuffled: false
        });
    });

    it('should draw a card', () => {
        const deck = [ ...config.deck ];
        const drawnCard = deck[1];
        const updatedDeck = deck.filter((item) => item.id !== drawnCard.id);
        const drawnCards = [];
        drawnCards.push(drawnCard);
        expect(reducer({
            deck: [
                ...config.deck
            ],
            pickedCards: [],
            drawnCards: [],
            isShuffled: false
        }, { 
            type: actionTypes.DRAW_CARD,
            index: 1
         })).toEqual({
            deck: updatedDeck,
            pickedCards: [],
            drawnCards: drawnCards,
            isShuffled: false
        });
    })
});
 