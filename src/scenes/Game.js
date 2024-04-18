import { Scene } from 'phaser';
import { GameMessage } from './GameMessage';

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
}
