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
        const message = ['Как думаете, о чем сейчас мечтает котик?'];
        const style = { fontSize: '32px', fill: '#000' };
        const newMessage = new GameMessage(this, x, y, message[0], style);      
        return newMessage;
    }

    createScoreLabel(x, y)
    {
        const style = { fontSize: '32px', fill: '#000' };
        const newScore = new ScoreLabel(this, x, y, 0, style);
        return newScore;
    }
}
