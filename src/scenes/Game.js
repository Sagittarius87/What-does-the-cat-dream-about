import { Scene } from 'phaser';
import { GameMessage } from './GameMessage';
import { ScoreLabel } from './ScoreLabel';
import { PortraitChange } from './portraitChange';
import { GameCards } from './GameCards';
import { Math } from 'phaser';

const CAT_IS_WAITING_KEY = 'catIsWaiting';
const CAT_IS_HAPPY_KEY = 'catIsHappy';
const CAT_IS_DISAPPOINTED_KEY = 'catIsDisappointed';
let cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9'];
let newGame = false

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    init () 
    {
        
    }

    create ()
    {
        this.gameMessage = this.createGameMessage(640, 50);
        this.add.existing(this.gameMessage);

        this.scoreLabel = this.createScoreLabel(1180, 50);
        this.add.existing(this.scoreLabel);

        this.catPortrait = this.createCatPortrait(640, 250);
        this.add.existing(this.catPortrait);

        //this.indexesOfThreeCards = this.createGameCards(430, 350, 640, 350, 850, 350, cards, 5);
        newGame = true;

        let [threeRandomCards, hiddenCardName] = this.selectionThreeRandomCards(cards);
        console.log('-----Calling the method selectionThreeRandomCards-----');
        console.log(`Three random cards: ${threeRandomCards}`);
        console.log(`Hidden card name: ${hiddenCardName}`);
        console.log('------------------------------------------------------');

        if (newGame == true) {
            this.gameCard1 = this.createGameCards(430, 550, threeRandomCards[0]);
            this.add.existing(this.gameCard1);         

            this.gameCard2 = this.createGameCards(640, 550, threeRandomCards[1]);
            this.add.existing(this.gameCard2);

            this.gameCard3 = this.createGameCards(850, 550, threeRandomCards[2]);
            this.add.existing(this.gameCard3);
        }

        this.gameCard1.getCardNumber();




        /*
        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
        */

        console.log('Game is created');
    }

    update ()
    {
       
    }

    createGameMessage(x, y) 
    {   
        const nameFont = 'PixeloidSans38';
        const message = ['Как думаете, о чем сейчас\n мечтает котик?'];
        //const style = { fontFamily: 'PixeloidSans', fontSize: '38px', fill: '#ffffff' };
        const newMessage = new GameMessage(this, x, y, nameFont, message[0]);      
        return newMessage;
    }

    createScoreLabel(x, y)
    {
        const nameFont = 'PixeloidSans38';
        //const style = { fontFamily: 'PixeloidSans', fontSize: '38px', fill: '#ffffff' };
        const newScore = new ScoreLabel(this, x, y, nameFont, 0);
        return newScore;
    }

    createCatPortrait(x, y)
    {
        const newPortrait = new PortraitChange(this, x, y, CAT_IS_WAITING_KEY, CAT_IS_HAPPY_KEY, CAT_IS_DISAPPOINTED_KEY);
        return newPortrait;
    }

    createGameCards(x, y, card)
    {   
        //const cardIndex = this.generatorOfRandomNumber(1, 9);
        //console.log(`New random number: ${cardIndex}`);
        //const newCards = new GameCards(this, x, y, cards[cardIndex]);
        console.log(`New random number: ${card}`);
        const newCards = new GameCards(this, x, y, cards[card]);
        return newCards;
    }

    selectionThreeRandomCards(cards)
    {
        let indexesOfThreeCards = [];
        let indexesOfCards = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        
        for (let i = 0; indexesOfThreeCards.length < 3; i++) {
            console.log(`-----Generate three random card number ${i}-----`);
            console.log(`indexesOfCards: ${indexesOfCards}`);
            let randomCardIndex = this.generatorOfRandomNumber(0, 8);
            console.log(`randomCardIndex: ${randomCardIndex}`);
            console.log(`indexesOfCards.includes(randomCardIndex): ${indexesOfCards.includes(randomCardIndex)}`);
            console.log(`Card found by index: ${cards.at(randomCardIndex)}`);
            if (indexesOfCards.includes(randomCardIndex)) {
                indexesOfThreeCards.push(randomCardIndex);
                let indexOfRandomCard = indexesOfCards.indexOf(randomCardIndex);
                console.log(`indexOfRandomCard: ${indexOfRandomCard}`);
                indexesOfCards.splice(indexOfRandomCard, 1);  
            }
            console.log(`New indexesOfCards: ${indexesOfCards}`);
            console.log(`Three cards length: ${indexesOfThreeCards.length}`);
            console.log(`indexesOfThreeCards: ${indexesOfThreeCards}`);
            console.log('---------------------------------------------');
        }

        console.log('-----Choosing a hidden card-----');
        let indexOfHiddenCard = this.generatorOfRandomNumber(0, 2);
        console.log(`indexOfHiddenCard: ${indexOfHiddenCard}`);
        let hiddenCard = indexesOfThreeCards[indexOfHiddenCard];
        console.log(`hiddenCard: ${hiddenCard}`);
        let hiddenCardName = cards.at(hiddenCard);
        console.log(`hiddenCardName: ${hiddenCardName}`);
        console.log('--------------------------------'); 
        return [indexesOfThreeCards, hiddenCardName];
    }

    generatorOfRandomNumber(min, max)
    {   
        const randomNumber = Math.Between(min, max);
        return randomNumber;
    }
}
