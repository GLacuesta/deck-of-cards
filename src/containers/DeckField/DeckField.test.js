import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { DeckField } from './DeckField';

import Deck from '../../components/Deck/Deck';
import Card from '../../components/Card/Card';

configure({adapter: new Adapter()});

describe('<DeckField />', () => {
    let wrapper, deckWrapper;
    const array = [
        { id: 1, value: 'Test' }
    ]

    beforeEach(() => {
        wrapper = shallow(<DeckField 
                        drawnCards={array} 
                        deck={array}
                        onShuffle={() => {}}
                        onShuffleAll={() => {}}
                        onDrawCard={() => {}}
                        />);
    });

    it('should have a Card', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
    });

    it('should have 2 Cards', () => {
        let updatedArray = [
            { id: 1, value: 'Test' },
            { id: 2, value: 'Another Test' }
        ];
        wrapper.setProps({ drawnCards: [...updatedArray] });
        expect(wrapper.find(Card)).toHaveLength(2);
    });

    it('should have no Card', () => {
        let updatedArray = [];
        wrapper.setProps({ drawnCards: [...updatedArray] });
        expect(wrapper.find(Card)).toHaveLength(0);
    });

    it('should have a Deck', () => {
        expect(wrapper.find(Deck)).toHaveLength(1);
    });


});