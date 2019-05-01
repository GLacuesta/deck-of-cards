import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './DeckField.module.css';
import Deck from '../../components/Deck/Deck';
import Card from '../../components/Card/Card';

import * as actions from '../../store/actions/index';

export class DeckField extends Component {
    
    componentDidMount () {
        console.log('start');
        const deck = [
            ...this.props.deck 
        ];
        this.props.onShuffle(deck);
        console.log(this.props.deck);
    }

    render () {
        const cards = this.props.drawnCards.length ? this.props.drawnCards.map(item => {
            return (
                <Card key={item.id} value={item.value}/>
            );
        }) : null;

        const deck = this.props.deck.length - 1 === 0 ? 
            <Deck>
                Deck Empty
            </Deck> :
            <Deck clicked={() => this.props.onDrawCard(this.props.deck.length - 1)}>
                Deck
            </Deck>
            
        return (
            <div className={classes.DeckField}>
                <div className={classes.DeckArea}>
                    {deck}
                    <button onClick={() => this.props.onShuffle(this.props.deck)}>
                        Shuffle Current Deck
                    </button>
                    <button onClick={() => this.props.onShuffleAll(this.props.drawnCards)}>
                        Shuffle All
                    </button>
                </div>
                <div className={classes.PickedArea}>
                    {cards}
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        deck: state.deckField.deck,
        drawnCards: state.deckField.drawnCards
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //onPickedCard: (id) => dispatch(actions.pickCard(id)),
        onShuffle: (arr) => dispatch(actions.shuffle(arr)),
        onShuffleAll: (arr) => dispatch(actions.shuffleAll(arr)),
        onDrawCard: (index) => dispatch(actions.drawCard(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckField);