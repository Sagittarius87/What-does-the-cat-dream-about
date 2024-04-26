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

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.gameMessage = this.createGameMessage(640, 50);
        this.add.existing(this.gameMessage);

        this.scoreLabel = this.createScoreLabel(1180, 50);
        this.add.existing(this.scoreLabel);

        this.catPortrait = this.createCatPortrait(640, 250);
        this.add.existing(this.catPortrait);

        //this.threeCards = this.createGameCards(430, 350, 640, 350, 850, 350, cards, 5);
        this.threeCards = this.createGameCards(430, 550, cards[0]);
        this.add.existing(this.threeCards);

        this.threeCards = this.createGameCards(640, 550, cards[1]);
        this.add.existing(this.threeCards);

        this.threeCards = this.createGameCards(850, 550, cards[2]);
        this.add.existing(this.threeCards);




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
        const newCards = new GameCards(this, x, y, card);
        console.log(`New random number: ${this.generatorOfRandomNumber(1, 9)}`);
        return newCards;
    }

    generatorOfRandomNumber(min, max)
    {   
        const randomNumber = Math.Between(min, max);
        return randomNumber;
    }
}
