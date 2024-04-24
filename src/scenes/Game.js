import { Scene } from 'phaser';
import { GameMessage } from './GameMessage';
import { ScoreLabel } from './ScoreLabel';

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
}
